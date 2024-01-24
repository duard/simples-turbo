import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import {
  accounts,
  groupRoles,
  groups,
  organizationGroups,
  organizationUsers,
  organizations,
  roles,
  todos,
  userRoles,
  users,
} from './schema';

// Organizations Table
export type Organization = InferSelectModel<typeof organizations>;
export type NewOrganization = InferInsertModel<typeof organizations>;

// Users Table
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

// Groups Table
export type Group = InferSelectModel<typeof groups>;
export type NewGroup = InferInsertModel<typeof groups>;

// Roles Table
export type Role = InferSelectModel<typeof roles>;
export type NewRole = InferInsertModel<typeof roles>;

// User Roles Table
export type UserRole = InferSelectModel<typeof userRoles>;
export type NewUserRole = InferInsertModel<typeof userRoles>;

// Group Roles Table
export type GroupRole = InferSelectModel<typeof groupRoles>;
export type NewGroupRole = InferInsertModel<typeof groupRoles>;

// Organization Users Table
export type OrganizationUser = InferSelectModel<typeof organizationUsers>;
export type NewOrganizationUser = InferInsertModel<typeof organizationUsers>;

// Organization Groups Table
export type OrganizationGroup = InferSelectModel<typeof organizationGroups>;
export type NewOrganizationGroup = InferInsertModel<typeof organizationGroups>;

// Todos Table
export type Todo = InferSelectModel<typeof todos>;
export type NewTodo = InferInsertModel<typeof todos>;

// Accounts Table
export type Account = InferSelectModel<typeof accounts>;
export type NewAccount = InferInsertModel<typeof accounts>;
