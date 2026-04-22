# Salt Mono 

A monorepo for the Salt Mobile ecosystem.


### `pnpm` commands 

    - `pnpm install` 
      - Run in the root to simultaneously install dependencies for every sub-app
    - `pnpm -F <app-name> <command>`
      - `-F` (filter) enables running a command (like dev or test) for an app without navigating into its folder
    - `pnpm -r <command>` 
      - simultaneoulsy execute script across every package in monorepo 