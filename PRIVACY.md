# Privacy Policy

**Extension:** StarPeek
**Last updated:** September 30, 2026

StarPeek ("the extension") shows the star count (and, optionally, the language breakdown) of a GitHub repository when you hover over a link to it. This policy explains what data the extension handles and why.

**Summary:** The developer does not collect, store, sell, or share any of your data. The extension has no analytics, no tracking, no ads, and no servers of its own.

## Data the extension handles

### 1. Links on web pages you visit
To find links to GitHub repositories, the extension's content script reads the `href` of links (`<a>` elements) on pages you visit. This happens entirely inside your browser. Page content, URLs, and browsing history are never recorded, stored, or sent to the developer.

### 2. Requests to the GitHub API
When you hover over a GitHub repository link (or when the page loads, if you turn on **Prefetch**), the extension sends a request directly from your browser to the public GitHub REST API (`https://api.github.com`) to fetch that repository's star count and, if enabled, its languages. The request contains only the repository's owner and name (for example, `owner/repo`).

As with any web request, GitHub receives standard request information such as your IP address and browser user agent. GitHub's handling of that data is covered by the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). The extension sends nothing to any other third party.

### 3. Optional GitHub personal access token
If you choose to enter a GitHub personal access token (to avoid API rate limits), it is:

- stored only on your device, using Chrome's built-in `chrome.storage.local` API (it is not synced to other browsers or devices);
- sent **only** to `https://api.github.com`, in the `Authorization` header, to authenticate the requests described above;
- never sent to the developer or anyone else.

A token needs no scopes for this extension. You can remove it at any time by removing the extension or clearing its data.

### 4. Settings
Your preferences (**Show languages** and **Prefetch**) are stored with Chrome's `chrome.storage.sync` API, so they follow you to your other signed-in Chrome browsers if Chrome Sync is enabled. They contain no personal information.

## What the extension does not do

- No collection of personally identifiable information, browsing history, or page content by the developer
- No analytics, telemetry, cookies, or tracking
- No sale or transfer of data to third parties
- No use of data for advertising, credit-worthiness, or lending purposes
- No remote code

## Permissions

| Permission | Why it is needed |
| --- | --- |
| `storage` | Save your settings and optional access token |
| Content script on all sites | Detect GitHub repository links on any page you visit so stars can be shown on hover |

## Children's privacy
The extension does not knowingly collect any information from anyone, including children under 13.

## Changes to this policy
If this policy changes, the updated version will be published at this same location with a new "Last updated" date.

## Contact
Questions or concerns: open an issue at <https://github.com/SuPythony/Github-Stars-Extension/issues>.

---

*This extension is not affiliated with, endorsed by, or sponsored by GitHub, Inc. GitHub is a trademark of GitHub, Inc.*
