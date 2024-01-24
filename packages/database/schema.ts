import type { AdapterAccount } from "@auth/core/adapters";
import {
  int,
  mysqlTable,
  primaryKey,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

// Organizations Table
export const organizations = mysqlTable("organization", {
  id: int("id").notNull().autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }),
  isActive: int("isActive").notNull().default(1),
  createdAt: timestamp("created_at", { mode: "date", fsp: 3 }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", fsp: 3 }).defaultNow(),
  deletedAt: timestamp("deleted_at", { mode: "date", fsp: 3 }),
  // Add other organization-related fields as needed
});

// Users Table
export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date", fsp: 3 }).defaultNow(),
  image: varchar("image", { length: 255 }),
  isActive: int("isActive").notNull().default(1),
  createdAt: timestamp("created_at", { mode: "date", fsp: 3 }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", fsp: 3 }).defaultNow(),
  deletedAt: timestamp("deleted_at", { mode: "date", fsp: 3 }),
  // Add other user-related fields as needed
});

// Groups Table
export const groups = mysqlTable("group", {
  id: int("id").notNull().autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  isActive: int("isActive").notNull().default(1),
  createdAt: timestamp("created_at", { mode: "date", fsp: 3 }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", fsp: 3 }).defaultNow(),
  deletedAt: timestamp("deleted_at", { mode: "date", fsp: 3 }),
  // Add other group-related fields as needed
});

// Roles Table
export const roles = mysqlTable("role", {
  id: int("id").notNull().autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  isActive: int("isActive").notNull().default(1),
  createdAt: timestamp("created_at", { mode: "date", fsp: 3 }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", fsp: 3 }).defaultNow(),
  deletedAt: timestamp("deleted_at", { mode: "date", fsp: 3 }),
  // Add other role-related fields as needed
});

// User Roles Table
export const userRoles = mysqlTable("userRole", {
  userId: varchar("userId", { length: 255 }).notNull(),
  roleId: int("roleId").notNull(),
  // Add other fields related to user roles as needed
});

// Group Roles Table
export const groupRoles = mysqlTable("groupRole", {
  groupId: int("groupId").notNull(),
  roleId: int("roleId").notNull(),
  // Add other fields related to group roles as needed
});

// Organization Users Table
export const organizationUsers = mysqlTable("organizationUser", {
  organizationId: int("organizationId").notNull(),
  userId: varchar("userId", { length: 255 }).notNull(),
  // Add other fields related to organization users as needed
});

// Organization Groups Table
export const organizationGroups = mysqlTable("organizationGroup", {
  organizationId: int("organizationId").notNull(),
  groupId: int("groupId").notNull(),
  // Add other fields related to organization groups as needed
});

// Todos Table
export const todos = mysqlTable("todo", {
  id: int("id").notNull().autoincrement().primaryKey(),
  description: varchar("description", { length: 256 }),
  completed: int("completed").notNull().default(0),
  addedAt: timestamp("added_at", { mode: "date", fsp: 3 }).defaultNow(),
});

// Accounts Table
export const accounts = mysqlTable("account", {
  userId: varchar("userId", { length: 255 }).notNull(),
  type: varchar("type", { length: 255 }).$type<AdapterAccount["type"]>().notNull(),
  provider: varchar("provider", { length: 255 }).notNull(),
  providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
  refresh_token: varchar("refresh_token", { length: 255 }),
  access_token: varchar("access_token", { length: 255 }),
  expires_at: int("expires_at"),
  token_type: varchar("token_type", { length: 255 }),
  scope: varchar("scope", { length: 255 }),
  id_token: varchar("id_token", { length: 2048 }),
  session_state: varchar("session_state", { length: 255 }),
}, (account) => ({
  compoundKey: primaryKey({
    columns: [account.provider, account.providerAccountId],
  }),
})
);


