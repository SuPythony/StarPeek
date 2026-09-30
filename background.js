chrome.storage.sync.get("showLangs", ({ showLangs }) => {
    if (!showLangs) {
        chrome.storage.sync.set({ showLangs: false });
    }
});
chrome.storage.sync.get("prefetch", ({ prefetch }) => {
    if (!prefetch) {
        chrome.storage.sync.set({ prefetch: false });
    }
});
// Move any token saved by older versions from sync storage to local storage
chrome.storage.sync.get("token", ({ token }) => {
    if (token) {
        chrome.storage.local.set({ token });
        chrome.storage.sync.remove("token");
    }
});
