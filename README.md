# inoreader-autoload-full-content
Automatically load full content when opening an article in Inoreader

### Configuration

Some feeds (such as *The Associated Press*) break when you request the full content in Inoreader. To exclude articles from these feeds, add the subscription name to the `excludedSources` list.

This script waits 200 milliseconds for Inoreader to fetch the article before requesting the full content. To increase/decrease the wait time, change the `waitTime` variable.