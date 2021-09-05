import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class NotificationActions {
    constructor(
        public _toastr: ToastrService,
        public _router: Router
    ) { }

    // public notify({ type, title, message }: { type: string, title: string, message: string }): void {
    //    this._toasterService.pop(type, title, message);
    // }

    public notifySuccess({ title, message }: { title: string, message: string }): void {
      this._toastr.success(title, message);
    }

    public notifyInfo({ title, message }: { title: string, message: string }): void {
      this._toastr.info(title, message);
    }

    public notifyNoRecords(): void {
      this._toastr.info('', 'No Records Found!!');
    }

    public notifyWarning({ title, message }: { title: string, message: string }): void {
      this._toastr.warning(title, message);
    }

    public notifyError({ title, message, error }: { title: string, message: any, error?: string }): void {       
        this._toastr.error(title, message);
    }
}
