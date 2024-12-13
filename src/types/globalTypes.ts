export interface ErrorOrResponse<T> {
    isError: boolean;
    errors: Array<{
      code: string;
      description: string;
      type: number;
      numericType: number;
      metadata: any | null;
    }>;
    value: T | null;
    errorsOrEmptyList: Array<any>;
    firstError: {
      code: string;
      description: string;
      type: number;
      numericType: number;
      metadata: any | null;
    } | null;
  }