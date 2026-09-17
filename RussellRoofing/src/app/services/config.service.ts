// src/app/services/config.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  getEmailJsPublicKey() {
    return environment.emailJsPublicKey;
  }

  getEmailJsServiceKey() {
    return environment.emailJsServiceKey;
  }

  getEmailJsTemplateKey() {
    return environment.emailJsTemplateKey;
  }
}