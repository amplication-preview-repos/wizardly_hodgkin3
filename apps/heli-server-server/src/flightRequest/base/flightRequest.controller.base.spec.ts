import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { FlightRequestController } from "../flightRequest.controller";
import { FlightRequestService } from "../flightRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  date: new Date(),
  id: "exampleId",
  time: new Date(),
  updatedAt: new Date(),
  wtgCode: "exampleWtgCode",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  date: new Date(),
  id: "exampleId",
  time: new Date(),
  updatedAt: new Date(),
  wtgCode: "exampleWtgCode",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    date: new Date(),
    id: "exampleId",
    time: new Date(),
    updatedAt: new Date(),
    wtgCode: "exampleWtgCode",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  date: new Date(),
  id: "exampleId",
  time: new Date(),
  updatedAt: new Date(),
  wtgCode: "exampleWtgCode",
};

const service = {
  createFlightRequest() {
    return CREATE_RESULT;
  },
  flightRequests: () => FIND_MANY_RESULT,
  flightRequest: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("FlightRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FlightRequestService,
          useValue: service,
        },
      ],
      controllers: [FlightRequestController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /flightRequests", async () => {
    await request(app.getHttpServer())
      .post("/flightRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /flightRequests", async () => {
    await request(app.getHttpServer())
      .get("/flightRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          time: FIND_MANY_RESULT[0].time.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /flightRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/flightRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /flightRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/flightRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        time: FIND_ONE_RESULT.time.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /flightRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/flightRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        time: CREATE_RESULT.time.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/flightRequests")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
