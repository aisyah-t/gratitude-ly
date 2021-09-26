# Gratitude-ly

## A brief history :bulb: :writing_hand:

During Phase 2 of the Web Development Bootcamp at [Enspiral Dev Adacemy](https://devacademy.co.nz) I decided to create a prompt-based gratitude journal app called _Gratitude-ly_.

When I was introduced to the concept of gratitude journal many years ago I struggled to make it a habit as I didn't know what to write about. During the bootcamp I discovered that you can search for prompts online to help get you started with gratitude journal entries.

I wanted to create _Gratitude-ly_ as a wellbeing tool for myself. When it's fully functioning I would also like to make it available for others to use.

The project is still very much a work in progress (in other words, I keep changing my  mind the more I learn at work) - I  am changing some of the functional and design features. I plan  to explore GraphQL, MongoDB and React Context for this project.

---

## User stories :open_book: :scroll:

As a user, I want to:

- be welcomed to the app/page.
- read a brief explanation of the purpose of and how to use the app.
- see a list of all the prompts available for gratitude journalling.
- choose a prompt from the list and then write my journal entry for the chosen prompt.
- review all my journal entries on one page for when I need reminders of the good things in life.
- update an existing journal entry.
- delete an entry I no longer want to keep.
- add my own prompts.

---

## Tech stack :gear: :computer:

- React (possibly with Context)
- Chakra UI
- GraphQL
- Node.js
- Express.js
- MongoDB??
- Webpack
- JWT Auth??
- Jest
- React Testing Library
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

### entries

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| entry       | String    |

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

**_GET_** /prompts

Response Body:

```JSON
    [
        {
            "promptId": 1,
            "prompt": "This is a prompt",
        },
        {
            "promptId": 1,
            "prompt": "Another prompt",
        },
    ]
```

### Get chosen prompt by providing a promptId

**_GET_** /prompt/:promptId

Response Body:

```JSON
    {
            "promptId": 1,
            "prompt": "This is a prompt",
    }
```

### Add an entry by providing a promptId

**_POST_** /entries

Response Body:

```JSON
    {
        "promptId": 1,
        "prompt": "Prompt text",
        "entry": "Entry for prompt"
    }
```

### Get all entries from the entries table

**_GET_** /entries

Response Body:

```JSON
    [
        {
            "promptId": 1,
            "prompt": "This is a prompt",
            "entries" : [
                {
                    "entryId": 1,
                    "entry": "An entry"
                },
                {
                    "entryId": 2,
                    "entry": "Another entry"
                }
            ]
        },
        {
            "promptId": 2,
            "prompt": "This is a prompt",
            "entries" : [
                {
                    "entryId": 1,
                    "entry": "An entry"
                },
                {
                    "entryId": 2,
                    "entry": "Another entry"
                }
            ]
        }
    ]
```

### Update an entry by providing an entryId

**_PATCH_** /entries/:entryId

### Delete an entry by providing and entryId

**_DELETE_** /entries/:entryId

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

# GraphQL

TOB BE ADDED

---
