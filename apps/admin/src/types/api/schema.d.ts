/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/v1/problems/{id}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * 문항 조회
     * @description 문항를 조회합니다.
     */
    get: operations['getProblem'];
    /**
     * 문항 업데이트
     * @description 문제를 업데이트합니다. 새끼문항은 들어온 list의 순서로 저장됩니다.
     */
    put: operations['updateProblem'];
    post?: never;
    /** 문항 삭제 */
    delete: operations['updateProblem_1'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/problemSet/{problemSetId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * 문항세트 개별 조회
     * @description 문항세트를 조회합니다.
     */
    get: operations['getProblemSet'];
    /**
     * 문항세트 수정
     * @description 문항세트의 이름 및 문항 리스트를 수정합니다.
     */
    put: operations['updateProblemSet'];
    post?: never;
    /**
     * 문항세트 삭제
     * @description 문항세트를 삭제합니다. (soft delete)
     */
    delete: operations['deleteProblemSet_1'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/problemSet/{problemSetId}/confirm': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /**
     * 문항세트 컨펌 토글
     * @description 문항세트의 컨펌 상태를 토글합니다.
     */
    put: operations['toggleConfirmProblemSet'];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/publish': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * 발행 생성하기
     * @description 특정 날짜에 문항세트를 발행합니다.
     */
    post: operations['postPublish'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/problems': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * 문항 생성
     * @description 문제를 생성합니다. 기출/변형 문제는 모든 값이 필수이며 창작 문제는 문항 타입만 필수 입니다.
     */
    post: operations['createProblem'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/problems/{problemId}/child-problems': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * 새끼문항 추가
     * @description 추가되는 새끼 문항의 id를 반환합니다. 컨펌 이후에는 새끼 문항 추가가 불가능합니다.
     */
    post: operations['createChildProblem'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/problemSet': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * 문항세트 생성
     * @description 문항세트를 생성합니다. 문항은 요청 순서대로 저장합니다.
     */
    post: operations['createProblemSet'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/auth/admin/login': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * 어드민 로그인
     * @description 이메일과 비밀번호로 로그인하여 액세스 토큰을 발급받고 리프레시 토큰을 쿠키에 설정합니다.
     */
    post: operations['adminLogin'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/publish/{year}/{month}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * 연월별 발행 조회
     * @description 연월별로 발행된 세트들을 조회합니다.
     */
    get: operations['getPublishMonth'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/problems/search': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * 문제 검색
     * @description 문항 ID, 문제명, 개념 태그리스트로 문제를 검색합니다. 개념 태그리스트는 OR 조건으로 검색하며 값이 없으면 쿼리파라미터에서 빼주세요
     */
    get: operations['search'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/problemSet/search': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * 문항세트 검색
     * @description 문항세트 타이틀, 문항세트 내 포함된 개념태그, 문항세트 내 포함된 문항 타이틀로 검색합니다. 발행상태는 발행이면 CONFIRMED, 아니면 NOT_CONFIRMED 입니다.
     */
    get: operations['search_1'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/problemSet/confirm/search': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * 발행용 문항세트 검색
     * @description 문항세트 타이틀, 문항세트 내 포함된 개념태그, 문항세트 내 포함된 문항 타이틀로 검색합니다. 발행상태가 CONFIRMED 문항세트만 조회됩니다..
     */
    get: operations['confirmSearch'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/practiceTestTags': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** 모의고사 목록 조회 */
    get: operations['getPracticeTestTags'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/member/me': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * 내 정보 조회
     * @description jwt accessToken을 통해 내 정보를 조회합니다.
     */
    get: operations['getMyInfo'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/images/{fileName}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** 이미지 업로드 완료 후 URL 조회 */
    get: operations['getImageUrl'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/images/problem/{problemId}/presigned-url': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** 이미지 업로드를 위한 presigned URL 발급 */
    get: operations['getProblemImagePresignedUrl'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/conceptTags': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** 모든 개념 태그 리스트 조회 */
    get: operations['getConceptTags'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/auth/reissue': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * 토큰 재발급
     * @description 리프레시 토큰을 통해 새로운 액세스 토큰을 발급하고 새로운 리프레시 토큰을 쿠키에 설정합니다.
     */
    get: operations['reissueToken'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/publish/{publishId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /**
     * 발행 삭제
     * @description 발행을 삭제합니다.
     */
    delete: operations['deleteProblemSet'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/api/v1/problems/{problemId}/child-problems/{childProblemId}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    /**
     * 새끼 문항 삭제
     * @description 컨펌 이후에는 새끼 문항 삭제가 불가능합니다.
     */
    delete: operations['deleteChildProblem'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    ErrorResponse: {
      message: string;
      /** @enum {string} */
      status:
        | '100 CONTINUE'
        | '101 SWITCHING_PROTOCOLS'
        | '102 PROCESSING'
        | '103 EARLY_HINTS'
        | '103 CHECKPOINT'
        | '200 OK'
        | '201 CREATED'
        | '202 ACCEPTED'
        | '203 NON_AUTHORITATIVE_INFORMATION'
        | '204 NO_CONTENT'
        | '205 RESET_CONTENT'
        | '206 PARTIAL_CONTENT'
        | '207 MULTI_STATUS'
        | '208 ALREADY_REPORTED'
        | '226 IM_USED'
        | '300 MULTIPLE_CHOICES'
        | '301 MOVED_PERMANENTLY'
        | '302 FOUND'
        | '302 MOVED_TEMPORARILY'
        | '303 SEE_OTHER'
        | '304 NOT_MODIFIED'
        | '305 USE_PROXY'
        | '307 TEMPORARY_REDIRECT'
        | '308 PERMANENT_REDIRECT'
        | '400 BAD_REQUEST'
        | '401 UNAUTHORIZED'
        | '402 PAYMENT_REQUIRED'
        | '403 FORBIDDEN'
        | '404 NOT_FOUND'
        | '405 METHOD_NOT_ALLOWED'
        | '406 NOT_ACCEPTABLE'
        | '407 PROXY_AUTHENTICATION_REQUIRED'
        | '408 REQUEST_TIMEOUT'
        | '409 CONFLICT'
        | '410 GONE'
        | '411 LENGTH_REQUIRED'
        | '412 PRECONDITION_FAILED'
        | '413 PAYLOAD_TOO_LARGE'
        | '413 REQUEST_ENTITY_TOO_LARGE'
        | '414 URI_TOO_LONG'
        | '414 REQUEST_URI_TOO_LONG'
        | '415 UNSUPPORTED_MEDIA_TYPE'
        | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
        | '417 EXPECTATION_FAILED'
        | '418 I_AM_A_TEAPOT'
        | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
        | '420 METHOD_FAILURE'
        | '421 DESTINATION_LOCKED'
        | '422 UNPROCESSABLE_ENTITY'
        | '423 LOCKED'
        | '424 FAILED_DEPENDENCY'
        | '425 TOO_EARLY'
        | '426 UPGRADE_REQUIRED'
        | '428 PRECONDITION_REQUIRED'
        | '429 TOO_MANY_REQUESTS'
        | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
        | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
        | '500 INTERNAL_SERVER_ERROR'
        | '501 NOT_IMPLEMENTED'
        | '502 BAD_GATEWAY'
        | '503 SERVICE_UNAVAILABLE'
        | '504 GATEWAY_TIMEOUT'
        | '505 HTTP_VERSION_NOT_SUPPORTED'
        | '506 VARIANT_ALSO_NEGOTIATES'
        | '507 INSUFFICIENT_STORAGE'
        | '508 LOOP_DETECTED'
        | '509 BANDWIDTH_LIMIT_EXCEEDED'
        | '510 NOT_EXTENDED'
        | '511 NETWORK_AUTHENTICATION_REQUIRED';
    };
    ChildProblemUpdateRequest: {
      /** Format: int64 */
      childProblemId: number;
      imageUrl?: string;
      /** @enum {string} */
      answerType?: 'MULTIPLE_CHOICE' | 'SHORT_ANSWER';
      answer?: string;
      conceptTagIds: number[];
    };
    ProblemUpdateRequest: {
      /** @enum {string} */
      problemType: 'GICHUL_PROBLEM' | 'VARIANT_PROBLEM' | 'CREATION_PROBLEM';
      /** Format: int64 */
      practiceTestId?: number;
      /** Format: int32 */
      number?: number;
      conceptTagIds: number[];
      answer?: string;
      title?: string;
      /** Format: int32 */
      difficulty?: number;
      memo?: string;
      mainProblemImageUrl?: string;
      mainAnalysisImageUrl?: string;
      mainHandwritingExplanationImageUrl?: string;
      readingTipImageUrl?: string;
      seniorTipImageUrl?: string;
      prescriptionImageUrls?: string[];
      /** @enum {string} */
      answerType?: 'MULTIPLE_CHOICE' | 'SHORT_ANSWER';
      updateChildProblems: components['schemas']['ChildProblemUpdateRequest'][];
      /** Format: int32 */
      recommendedMinute?: number;
      /** Format: int32 */
      recommendedSecond?: number;
    };
    ChildProblemGetResponse: {
      /** Format: int64 */
      childProblemId: number;
      imageUrl?: string;
      /** @enum {string} */
      answerType?: 'MULTIPLE_CHOICE' | 'SHORT_ANSWER';
      answer?: string;
      conceptTagIds: number[];
    };
    ProblemGetResponse: {
      /** Format: int64 */
      id: number;
      problemCustomId: string;
      conceptTagIds: number[];
      isConfirmed?: boolean;
      /** Format: int64 */
      practiceTestId?: number;
      /** Format: int32 */
      number?: number;
      /** Format: int32 */
      difficulty?: number;
      title?: string;
      answer?: string;
      memo?: string;
      /** @enum {string} */
      problemType?: 'GICHUL_PROBLEM' | 'VARIANT_PROBLEM' | 'CREATION_PROBLEM';
      /** @enum {string} */
      answerType?: 'MULTIPLE_CHOICE' | 'SHORT_ANSWER';
      mainProblemImageUrl?: string;
      mainHandwritingExplanationImageUrl?: string;
      mainAnalysisImageUrl?: string;
      readingTipImageUrl?: string;
      seniorTipImageUrl?: string;
      prescriptionImageUrls: string[];
      childProblems: components['schemas']['ChildProblemGetResponse'][];
      /** Format: int32 */
      recommendedMinute?: number;
      /** Format: int32 */
      recommendedSecond?: number;
    };
    ProblemSetUpdateRequest: {
      problemSetTitle?: string;
      problemIds: number[];
    };
    PublishPostRequest: {
      /** Format: date */
      publishedDate: string;
      /** Format: int64 */
      problemSetId: number;
    };
    IdResponse: {
      /** Format: int64 */
      id: number;
    };
    ProblemPostRequest: {
      /** @enum {string} */
      problemType: 'GICHUL_PROBLEM' | 'VARIANT_PROBLEM' | 'CREATION_PROBLEM';
      /** Format: int64 */
      practiceTestId?: number;
      /** Format: int32 */
      number?: number;
    };
    ProblemPostResponse: {
      /** Format: int64 */
      id: number;
      problemCustomId: string;
    };
    AccessTokenResponse: {
      accessToken: string;
    };
    AdminLoginRequest: {
      email: string;
      password: string;
    };
    PublishMonthGetResponse: {
      /** Format: int64 */
      publishId?: number;
      /** Format: int32 */
      day?: number;
      problemSetInfo?: components['schemas']['PublishProblemSetResponse'];
    };
    PublishProblemSetResponse: {
      /** Format: int64 */
      id?: number;
      title?: string;
    };
    ProblemSearchGetResponse: {
      /** Format: int64 */
      problemId: number;
      problemCustomId: string;
      problemTitle?: string;
      memo?: string;
      mainProblemImageUrl?: string;
      tagNames: string[];
    };
    ProblemSetGetResponse: {
      /** Format: int64 */
      id?: number;
      title?: string;
      /** @enum {string} */
      confirmStatus?: 'CONFIRMED' | 'NOT_CONFIRMED';
      publishedDates: string[];
      problemSummaries: components['schemas']['ProblemSummaryResponse'][];
    };
    ProblemSummaryResponse: {
      /** Format: int64 */
      problemId: number;
      problemCustomId: string;
      problemTitle?: string;
      memo?: string;
      mainProblemImageUrl?: string;
      tagNames: string[];
    };
    ProblemSetSearchGetResponse: {
      /** Format: int64 */
      id: number;
      problemSetTitle?: string;
      /** @enum {string} */
      confirmStatus?: 'CONFIRMED' | 'NOT_CONFIRMED';
      problemThumbnailResponses: components['schemas']['ProblemThumbnailResponse'][];
    };
    ProblemThumbnailResponse: {
      problemTitle?: string;
      problemMemo?: string;
      mainProblemImageUrl?: string;
    };
    PracticeTestTagResponse: {
      /** Format: int64 */
      id: number;
      name: string;
    };
    MemberGetResponse: {
      /** Format: int64 */
      id?: number;
      name?: string;
      email?: string;
    };
    PresignedUrlResponse: {
      presignedUrl: string;
    };
    ConceptTagResponse: {
      /** Format: int64 */
      id: number;
      name: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  getProblem: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['ProblemGetResponse'];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  updateProblem: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: number;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ProblemUpdateRequest'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['ProblemGetResponse'];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  updateProblem_1: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  getProblemSet: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        problemSetId: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['ProblemSetGetResponse'];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  updateProblemSet: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        problemSetId: number;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ProblemSetUpdateRequest'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  deleteProblemSet_1: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        problemSetId: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  toggleConfirmProblemSet: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        problemSetId: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            /** @enum {string} */
            data: 'CONFIRMED' | 'NOT_CONFIRMED';
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  postPublish: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['PublishPostRequest'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['IdResponse'];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  createProblem: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ProblemPostRequest'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['ProblemPostResponse'];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  createChildProblem: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        problemId: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['IdResponse'];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  createProblemSet: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['IdResponse'];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  adminLogin: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['AdminLoginRequest'];
      };
    };
    responses: {
      /** @description 로그인 성공 */
      200: {
        headers: {
          /** @description 리프레시 토큰이 담긴 HTTP Only 쿠키 */
          'Set-Cookie'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: components['schemas']['AccessTokenResponse'];
          };
        };
      };
      /** @description 인증 실패 (잘못된 이메일 또는 비밀번호) */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  getPublishMonth: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        year: number;
        month: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['PublishMonthGetResponse'][];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  search: {
    parameters: {
      query?: {
        problemCustomId?: string;
        title?: string;
        conceptTagIds?: number[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['ProblemSearchGetResponse'][];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  search_1: {
    parameters: {
      query?: {
        problemSetTitle?: string;
        problemTitle?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['ProblemSetSearchGetResponse'][];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  confirmSearch: {
    parameters: {
      query?: {
        problemSetTitle?: string;
        problemTitle?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['ProblemSetSearchGetResponse'][];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  getPracticeTestTags: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['PracticeTestTagResponse'][];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  getMyInfo: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['MemberGetResponse'];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  getImageUrl: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        fileName: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: string;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  getProblemImagePresignedUrl: {
    parameters: {
      query: {
        'image-type':
          | 'MAIN_PROBLEM'
          | 'MAIN_ANALYSIS'
          | 'MAIN_HANDWRITING_EXPLANATION'
          | 'READING_TIP'
          | 'SENIOR_TIP'
          | 'PRESCRIPTION'
          | 'CHILD_PROBLEM';
      };
      header?: never;
      path: {
        problemId: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['PresignedUrlResponse'];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  getConceptTags: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': {
            data: components['schemas']['ConceptTagResponse'][];
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  reissueToken: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description 토큰 재발급 성공 */
      200: {
        headers: {
          /** @description 새로운 리프레시 토큰이 담긴 HTTP Only 쿠키 */
          'Set-Cookie'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            data: components['schemas']['AccessTokenResponse'];
          };
        };
      };
      /** @description 유효하지 않은 리프레시 토큰 */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
      /** @description 리프레시 토큰 쿠키 없음 */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  deleteProblemSet: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        publishId: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
  deleteChildProblem: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        problemId: number;
        childProblemId: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          '*/*': components['schemas']['ErrorResponse'];
        };
      };
    };
  };
}
