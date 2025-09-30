# TODO: Fix Issues in src/pages/account.jsx

- [x] Remove unused `useState` for `usersdata`
- [x] Fix `createuser` function: correct method to "POST", fix body to JSON.stringify(state), add headers for JSON, improve response handling with try-catch and success alert
- [x] Update form `onSubmit` to call `createuser` and prevent default
- [x] Add `type="submit"` to the button
- [x] Make text inputs controlled by adding `value` props
- [x] Make radio buttons controlled by adding `checked` props
- [x] In `createuser`, on success, reset state to initial `useraccount` and alert success
- [x] Remove redundant `url` redefine in `createuser`
