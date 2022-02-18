class BaseModel {
  data: any
  message:string
  errno:number
  constructor(data?:any, message?:string) {
    if (typeof data === "string") {
      this.message = data;
      data = null;
      message = null;
    }

    if (data) {
      this.data = data;
    }

    if (message) {
      this.message = message;
    }
  }
}

export class SuccessModel extends BaseModel {
  constructor(data?:any, message?:string) {
    super(data, message);
    this.errno = 0;
  }
}
export class ErrorModel extends BaseModel {
  constructor(data?:any, message?:string) {
    super(data, message);
    this.errno = -1;
  }
} 

