# Far Out! - React Native Project

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
</p>

## 🚀 How to use

- Install packages with `npm install`.
- To run locally, use `npm start` to kick off Expo Go and Metro.
- To run the Unit Tests, use the `npm test` command.

## 📝 Notes

- I used the `Blank` template—`npx create-expo-app --template blank`—when generating the Expo framework for this project.
- None of the libraries I used required a CocoaPods update, so to keep this repo a bit lighter, I did not generate the `iOS` or `android` native directories with `npx expo run:ios`, `npx expo run:android`, or `npx expo prebuild`.

### AI Disclosure:

1. AI Usage: Did you use any AI tools or assistants during this challenge? If so, which tools did you
use, and for what parts of the challenge?
  - I tried to stick to using the documentation at https://reactnative.dev when faced with deciding what library components to use and how to use them. 
  - In Visual Studio Code, I had the inline code completion disabled.
  - When I did use AI, I used `CoPilot` in my VSC editor for styling questions on FlexBox and CSS, some help in setting up the unit tests, and questions about TypeScript syntax.
2. Manual Work: What aspects of the challenge did you complete without AI assistance? Why did you choose to approach those parts manually?
  - The project structure setup and building of components was done without AI assistance. When I had questions I turned to Google or Stack Overflow searches. Being that I'm still learning the Framework, I felt more comfortable trusting those answers and posts than AI generated responses.
3. Evaluating AI Suggestions: Did you encounter any suggestions from AI tools that were incorrect or suboptimal? If so, how did you identify and correct them?
  - In this challenge, when I did turn to AI suggestions they tended to work. I did get some styling suggestions that didn't work—like how to align items in a flex row to the bottom instead of center—that didn't work, and in those cases I turned to Google and StackOverflow instead.
4. Modifications: Did you modify any AI-generated code? If yes, what changes did you make and why?
  - Yes, when putting the unit tests together, I moved some variables/constants around to make them available to other tests. I had CoPilot help me write a an initial test and then used that as a template for other tests, and then refactored.
5. AI in Your Workflow: How do you see AI fitting into your overall workflow as an engineer? Can you share examples from this challenge that illustrate your approach?
  - I consider it "another tool in the toolbelt" along with searching through tech documentation, Google, StackOverflow and Medium articles.
  - In the end AI usually provides the quickest answer, but you have to be able to judge the response you're given. I find I'm usually best served by other sources for more complex issues, but for things like what CSS attribute to use, or syntax questions AI works great.