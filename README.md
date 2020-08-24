# Gratitude-ly

## A brief history :bulb: :writing_hand:

During Phase 2 of the Web Development Bootcamp at [Enspiral Dev Adacemy](https://devacademy.co.nz) I decided to create a prompt-based gratitude journal app called _Gratitude-ly_.

When I was introduced to the concept of gratitude journal many years ago I struggled to make it a habit as I didn't know what to write about. During the bootcamp I discovered that you can search for prompts online to help get you started with gratitude journal entries.

I wanted to create _Gratitude-ly_ as a wellbeing tool for myself. When it's fully functioning I would also like to make it available for others to use.

The project is still very much a work in progress. I will be exploring React Hooks and Context for this project and changing some of the functional and design features. I also plan on incorporating unit testing for this project.

---

## User stories :open_book: :scroll:

As a user, I want to:

- be welcomed to the app/page.
- read a brief explanation of the purpose of and how to use the app.
- see a list of all the prompts available for gratitude journalling.
- choose a prompt from the list and then write my journal entry for the chosen prompt.
- add an image to my journal entry.
- update an existing journal entry.
- delete an entry I no longer want to keep.
- add my own prompts.
- review all my journal entries on one page for when I need reminders of the good things in life.

---

## Tech stack :gear: :computer:

- React (with Hooks and Context)
- Skeleton CSS (to change to Materialize CSS)
- Node.js
- Express.js
- Knex.js
- Webpack
- JWT OAuth
- Jest
- Heroku/Netlify (for deployment)

---
# Server-side

## Database

### prompts (One-to-many)

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| prompt      | String    |
| entry_id    | Integer   |

### entries (One-to-many)

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| entry       | String    |
| prompt_id   | Integer   |

### users

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| username    | String    |
| hash        | String    |

### users_entries (many-to-many)

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| user_id     | String    |
| prompt_id   | Integer   |
| entry_id    | Integer   |

---

## API Endpoints

TO BE UPDATED

### Get all prompts from the prompts table

**_GET_**

### Get a prompt by providing a promptId

**_GET_**

### Add an entry by providing a promptId

**_POST_**

### Get all entries from the entries table

**_GET_**

### Update an entry by providing an entryId

**_PATCH_**

### Delete an entry by providing and entryId

**_DELETE_**

---

# Client-side

## Wireframes

TO BE ADDED

---

## Components

TO BE ADDED

---

## Context

TO BE ADDED

---

# Hooks

TOB BE ADDED 

---
