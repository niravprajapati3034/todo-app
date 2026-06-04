# Todo App - Angular 21 + .NET 9

A full-stack Todo List application built with Angular 21 (frontend) and .NET 9 Web API (backend).

## Tech Stack
- **Frontend:** Angular 21, TypeScript, Reactive Forms, Angular Signals
- **Backend:** .NET 9 Web API, C#
- **Architecture:** REST API with in-memory data storage

## Prerequisites
- Node.js v20+
- Angular CLI v21
- .NET 9 SDK

## How to Run

### Backend
cd backend
dotnet run

Backend will start on: http://localhost:5057

### Frontend
cd frontend
npm install
ng serve

Frontend will start on: http://localhost:4200

## Features
- View all todos
- Add new todo with validation
- Delete todo

## Architecture
- **todo-form** — Add todo form with validation
- **todo-list** — Display and delete todos
- **TodoService** — Shared signal state management

## Frontend Validation
- Title: required, min 3, max 50 characters
- Description: required, min 5, max 100 characters
- Category: required (Personal / Teams)
- Date: required, past date not allowed
- Time: required