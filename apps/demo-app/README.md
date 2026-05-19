# Demo App 

Sandbox, prototyping tool, and ultimatey a demo for devs and employers.  

## Run a Build

- install dependencies
   ```zsh
   pnpm i
   ```
- start the metro server
   ```zsh
   npx expo start
   ```
- run a flavor 
  - android
      ```zsh
      npx expo run:android
      ```
  - ios
      ```zsh
      npx expo run:ios
      ```


## Docs

- [Expo](https://docs.expo.dev/) the fundamentals 
- [Expo advanced guides](https://docs.expo.dev/guides)
- [File-based routing](https://docs.expo.dev/router/introduction)
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## Links

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
_TICKET #9 ADD LINK TO CONTRIBUTING.md_ 

### TEMP TO-DO 
_Note: transfer these to Monday.com

- Accessibility 
  - Unnecessary here
  - Write ADR for Salt
- Analytics 
   - Unnecessary here
   - Write ADR for Salt 
- Boilerplate
  - Create `data/` folder
    - Store (length 200) array of recipe title data
  - Clarify using `data` in tests? 
  - Clarify `test` structure 
  - Clarify .lint 
  - Clarify husky and pre-commit hooks  
  - Furthermore? Ask Gemini re additional setup
  - Prettier & Lint-Staged: Husky triggers `lint-staged`
    - lint and prettify _only_ commit-staged files, not entire codebase
  - Typescript Strict ensure "strict" is true is tsconfig.json (why?)
  - Path aliases
  - React Native Testing Library (RNTL)
- Constants, Themes, Styles
  - Design Token System? 
  - Colors
  - Spacing
  - Typography
  - Standard StyleSheet with a constant theme.ts file? 
  - _OR_ library like Restyle or Tailwind? 
- Error Monitoring & Observability 
   - Not necessary 
   - Write ADR for Salt app
- Fabric Native Components 
  - ImageSwiper
    - Max 3 to 5 images per recipe
  - SocialFeedList 
    - Image
    - paginated
    - Store image locally in condensed format? 
- Global State 
   - Zustand
   - MobX 
   - Redux Saga
   - Redux Thunk 
- Homepage? 
  - Component list with links? 
- Hooks 
  - Confirm file/folder structure with Gemini
    - hooks 
    - endpoints or buildUrls
    - transforms 
    - models 
  - useFetchPicsum
    - type RawPicsumResponse
    - type PicsumResponse (the _transformed payload!_)
    - return [fetchPicsum]
    - https://picsum.photos/v2/list?limit=20 
    - Render each item using the React Native Image component
    - Set the image source to the download_url property from API payload
    - Hardcode image dimensions 200w x 200h
- Lists
  -  `<Scrollview/>` & `map()`
    - Basic recipe data 
  - `<Flatlist />` 
    - Picsum data  
    - Use React Native `<Image />` component
    - Set imageSource to download_url property from API payload
    - Hardcode image dimensions to 200W x 200H 
  - `<SectionList />`
    - Recipes!  
- Screens 
  - To do
- Server (Async) State Management 
  - Fetching APIs (like useFetchPicsum) handling states, caching and retries is anti-pattern (when did this become so?)
  - Add React Query (aka TanStack Query)
    - hook for async data to handle loading, error, data states without effort

Ticket #1 
- Create recipeData for Scrollview
- Create "ScrollView" screen
- Create button component 
 - implement on HomeScreen
- Query Gemini re HomeScreen Format

Ticket #2
- Setup Jest and tests
- Setup commit pipeline 
 - Husky
 - Lint 
 - commit lint (commit must be semver e.g. _"chore(<ticket>): message"_)
 - run `build`
- Write ticket to create CI/CD pipeline 

Ticket #3 
- Themes and styles
  - Create a theme/ or constants/
  - Define colors.ts (primary, secondary, background, text, error).
  - Define spacing.ts 
   - 8-point spacing scale (e.g., 8, 16, 24px) to replace arbitrary numbers
   with a strict mathematical rhythm
   - Use for ALL padding, margin, gaps, and positing in Stylesheets
  - Define typography.ts
   - Font family
   - Size 
   - Weights
   - Etc 
  - **Decide** 
    - Simple constant export (e.g., theme.colors.primary) 
    - or React Context (ThemeProvider)
    - or a library like Shopify's Restyle? 
    - In DEMO use constants! 

Ticket #5
- Transfer all TO-DO to Monday.com

Ticket #6 
- Interviews
- Use STAR+R method (Situation, Task, Action, Result + Reflection)
  - "The Conflict" story (Justin/TotalHours, Mohit/Race condition)
  - "The Solution / Awesome" story
  - "Decisions" (Decision Matrix / ADRs)
    - The ADR (Architecture Decision Record) Interviewers love this ~says Gemini
    - "I documented this as an ADR. I weighed Approach A vs B, considered the long-term impact on maintenance,
    and chose B because it minimized future execution debt."
    - 
  - "The Failure / Mistake" story
    - A time you broke production, introduced a severe bug, or made a bad architectural call. 
    - Focus on the post-mortem: how you stayed calm, fixed it, and put a system in place so it never happened again.
  - "The Pushback"
    - A time you had to push back on Product or Design
    - e.g. "That animation will drop frames on Android, but here is an alternative that achieves the same goal safely."
  - "Performancer Optimization"
    - Essential for React Native 
    - Have a story ready about fixing a memory leak
    - Reducing re-renders (e.g useMemo/FlatList knowledge)
    - Unblocking the JS thread (i.e. ebounce)
   - The "The Mentorship" story
    - A time you paired with a junior developer to level them up
    - Or a time you improved the developer experience (DX) for your entire team (e.g., writing better CI/CD pipelines or documentation).
    - All onboarding docs 

Ticket #7 
- ADR 1.1-migrating-to-react-native-cli-for-production-app

Ticket #8 
  - AI
    - Claude
    - Agents, Context Windows, Agentium

Ticket #9 
  - CONTRIBUTING.md
  - Write guidelines for contributing
  - Types
    - Single-use? Colocate the type directly within or adjacent (i.e. types.ts) to its component file.  
    - Specific feature or domain? Elevate type to <path>/featureName/ 
    - Globally scoped type? Store these in src/types/. For example recipe.type.ts
    - Enforce this rule using ESLint boundaries (eslint-plugin-import or good-fences)
  - Onboarding
  - Coding Standards
  - Branching Strategy

  

  

     
     
