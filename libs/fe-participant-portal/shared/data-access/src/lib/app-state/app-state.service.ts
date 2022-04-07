import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Agent } from '@es/shared/api-client';
import { AvatarChoice } from '@es/fe-participant-portal/shared/models';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  public agent$ = new BehaviorSubject<Agent | null>(null);
  public agentAvatarChoice$ = new BehaviorSubject<AvatarChoice | null>(null);
}
