---
title: "Oracle to PostgreSQL SQL Converter Tool"
description: "Convert Oracle SQL queries to PostgreSQL with this handy tool."
author: "Jinesh Subedi"
date: "2024-01-01"
tags: ["Oracle", "PostgreSQL", "SQL", "Conversion"]
---

# Oracle to PostgreSQL SQL Converter Tool
### <BadgeBlog type="tip" title="Oracle, PostgreSQL, SQL, Conversion" />

## Introduction
If you're transitioning from Oracle to PostgreSQL and need to convert your SQL queries, this simple tool can help streamline the process. It provides a user-friendly interface for converting Oracle-specific syntax to PostgreSQL.

## How to Use

1. Paste your Oracle SQL query in the left textarea.
2. Click the "Convert to PGSQL" button to transform the SQL into PostgreSQL-compatible syntax.
3. You can further fine-tune the converted SQL if needed.
4. Click the "Copy" button to copy the converted SQL to your clipboard.

## Conversion Features

### 1. NVL to COALESCE

The tool automatically converts Oracle's `NVL` function to PostgreSQL's `COALESCE` function.

### 2. TRUNC to DATE_TRUNC

Converts Oracle's `TRUNC` function to PostgreSQL's `DATE_TRUNC` function for date truncation.

### 3. SYSDATE to CURRENTTIME

Replaces Oracle's `SYSDATE` with PostgreSQL's equivalent, `CURRENTTIME`.

## Example

```sql
-- Oracle SQL
SELECT NVL(column1, 'default_value') FROM my_table WHERE TRUNC(date_column) = SYSDATE;

-- Converted PostgreSQL SQL
SELECT COALESCE(column1, 'default_value') FROM my_table WHERE DATE_TRUNC('day', date_column) = CURRENTTIME;
```

## Link

Thanks to [Sujan Shakya](https://github.com/sujanshsh) for this awesome [Github Repo](https://github.com/sujanshsh/html-javascript-utilities)
