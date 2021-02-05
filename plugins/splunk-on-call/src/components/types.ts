/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { IncidentTarget } from '../api/types';

export type Service = {
  id: string;
  name: string;
  html_url: string;
  integrationKey: string;
  escalation_policy: {
    id: string;
    user: User;
  };
};

export type Assignee = {
  id: string;
  summary: string;
  html_url: string;
};

export type SubHeaderLink = {
  title: string;
  href?: string;
  icon: React.ReactNode;
  action?: React.ReactNode;
};

// GET Teams
export type Team = {
  name?: string;
  slug?: string;
  memberCount?: number;
  version?: string;
  isDefaultTeam?: boolean;
  _selfUrl?: string;
  _policiesUrl?: string;
  _membersUrl?: string;
  _adminsUrl?: string;
};

// GET oncall
export type OnCall = {
  team?: OnCallTeamResource;
  oncallNow?: OnCallNowResource[];
};

export type OnCallTeamResource = {
  name?: string;
  slug?: string;
};

export type OnCallNowResource = {
  escalationPolicy?: OnCallEscalationPolicyResource;
  users?: OnCallUsersResource[];
};

export type OnCallEscalationPolicyResource = {
  name?: string;
  slug?: string;
};

export type OnCallUsersResource = {
  onCalluser?: OnCallUser;
};

export type OnCallUser = {
  username?: string;
};

// GET /api-public/v2/user
export type User = {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  createdAt?: string;
  passwordLastUpdated?: string;
  verified?: boolean;
  _selfUrl?: string;
};

// Incident creation
export type CreateIncidentRequest = {
  summary: string;
  details: string;
  userName: string;
  targets: IncidentTarget;
  isMultiResponder: boolean;
};

// GET incidents
export type Incident = {
  incidentNumber?: string;
  startTime?: string;
  currentPhase?: string;
  alertCount?: number;
  lastAlertTime?: string;
  lastAlertId?: string;
  entityId?: string;
  host?: string;
  service?: string;
  pagedUsers?: string[];
  pagedTeams?: string[];
  entityDisplayName?: string;
  pagedPolicies?: EscalationPolicyInfo[];
  transitions?: IncidentTransition[];
  firstAlertUuid?: string;
  monitorName?: string;
  monitorType?: string;
  incidentLink?: string;
};

export type EscalationPolicyInfo = {
  policy: EscalationPolicySummary;
  team: EscalationPolicyTeam;
};

export type IncidentTransition = {
  name?: string;
  at?: string;
  by?: string;
  message?: string;
  manually?: boolean;
  alertId?: string;
  alertUrl?: string;
};

export type EscalationPolicySummary = {
  name: string;
  slug: string;
  _selfUrl: string;
};

export type EscalationPolicyTeam = {
  name: string;
  slug: string;
};
