# VuePress plugin for Web Speech API

🚧 Documentation in progress

⚙️ A new component for easy settings is coming soon

## Installation

```
npm i @paulbarre/vuepress-plugin-speech
```

## Config

Add the plugin to your config file:

**.vuepress/config.js**

```js
module.exports = {
  plugins: [
    [
      '@paulbarre/speech',
      { lang: 'fr-FR' }
    ]
  ]
}
```

|Option|Type|Default|Details|
|:-|:-|:-|:-|
|`lang`|`string`|`undefined`|Specify the language to select the voices. BCP 47 language tag.|

## `$speech`

All your components have access to the `$speech` property.

**$speech.voice**: The current voice

**$speech.voices**: The available voices

**$speech.setVoice(`voiceURI`)**: Pass the URI of the voice you want to set

**$speech.speak(`text`)**: Synthesis a text by the current voice

## `tts` component

This plugin installs a component you can add into your Markdown files to show texts _playable_.

```md
# My page title

Some paragraph with a text that can be synthesize: <tts text="Hello folks!" />
```

`tts` has two props:

**`text`**: The text to show and speak if `alt` is undefined.

**`alt`**: The true text to speak. It allows you to show some text but read another.

```md
<tts text="Hello" alt="Goodbye" />
```