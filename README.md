# Introduction

This repo contains two key elements: a) the source code for the first hand-typed (ie. non-ai) poc for [idea](https://handsome-femur-998.notion.site/TBD-d2425bb47fc1408e90e4ab928590f0bb?pvs=4), and b) the result of taking that hand-typed source code, generating an application prompt from it, and running the prompt to get version 3 of the ai-generated poc. Part B's content can be found in the `smol-v3` directory. Note, the human source code to ai-generated prompt back to ai-generated code is once again being powered by [smol-ai](https://github.com/smol-ai/developer).

## A

A note to the reader: this source code was not built to demonstrate good architecture, code quality, performance, or UI. It was built to prioritize iteration speed and fulfill the purpose of providing a working and sharable (see codesandbox link below) example of the core feature sets of [idea](https://handsome-femur-998.notion.site/TBD-d2425bb47fc1408e90e4ab928590f0bb?pvs=4).

Checkout the following Loom video for a quick overview of how to use the POC (did I mention that the UI is severly lacking intuitiveness? :D).

To play around with POC, visit [this](https://codesandbox.io/p/github/ermartinez13/tbd-poc-v1/main?workspaceId=ce2ee9c5-9e3c-4906-8a66-51ac2d9f846b&file=/src/App.tsx:1,1) Codesandbox. Note: a series of Typescript errors will be highlighted in Codesandbox's editor but you shouldn't worry, the code does run as expected.

## B

I was very satisfied with the straightforwardness and structure of the generated prompt from my source code (it definitely reaffirmed my suspicions that I am not a very good prompt writer). As for the generated code from the generated prompt, I have yet to take it for a spin but was able to spot a few bugs from glancing at the files.

In case, you're interested, to generate the prompt from my source code, I had to:

0. Move into the `v0` directory of [smol-ai's repo](https://github.com/smol-ai/developer)
1. Install the modal library locally (I had to use pip in the following format: `python3 -m pip install modal`)
2. Create a modal account
3. Generate a modal token
4. Install the dot env library
5. Creat a `.env` file and set my OpenAI API key inside it
6. Paste my source code into a `generated` directory (I chose to flatten out my file structure when pasting them over - which required me to update import paths but no other changes were made)
7. Run `modal run code2prompt.py`

The steps above compliment the documentation found in smol-ai's `/v0/v0_readme.md` and [Modal's getting started](https://modal.com/docs/guide) page.
