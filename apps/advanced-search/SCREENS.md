# Screens

A rough list of every screen and state in the advanced search prototype. Use it to see the full scope of what needs building. There are two pages, a start page and a results page. Everything else is a state, panel or pop-up on one of those two.

Each main state has its own link, so you can jump straight to it while the app is running (`localhost:3100/<link>`).

| Link | What it shows |
|---|---|
| `/start` | Start page, quick search, nothing entered |
| `/values` | Start page after a common filter has been pressed but no value picked yet |
| `/manual` | Start page on the advanced search tab |
| `/picked` | Start page with one filter picked from the advanced search columns |
| `/resolving` | Start page while a typed search is being read |
| `/filters` | Start page with a typed search turned into filters |
| `/results` | Results page, search panel closed |
| `/edit-filter` | Results page with the search panel open on one filter |

Tip: typing `$$` in a search box fills in a sample search. Press it again to cycle through four of them. One gives no results and one has a word the search can't place, so they're a quick way to see those states.

## On every screen

**Header**
- GlobalData logo, a "Search all of GlobalData" box, a notification bell and the user's initials.
- A row of product tabs under it ("Companies", "Drugs"), with Drugs underlined as the current one.
- None of the header works in the prototype. It's there for context.

**Search tabs**
- Two tabs: "Quick search" and "Advanced search". The selected tab is raised, the other one is greyed.
- On the start page Quick comes first. On the results panel Advanced comes first.

**Filter bar**
- Shows the active filters as chips. Each chip reads like a sentence: name, then "IS" or "IS NOT", then the value(s), then a remove button.
- "IS NOT" chips turn red, so an excluded filter never looks the same as an included one.
- A chip with more than one value has an AND/OR switch between the values. Two or more chips have an AND/OR switch between them.
- A chip with no value yet says "Select value".
- An "Add filter" button at the end.
- With nothing in it: "No filters selected".
- Start page version: a card with "Clear filters" and "View N drugs" buttons at the bottom, and a close button in the corner that clears everything.
- Results page version: a full-width strip with a "Clear filters" link. After three lines of chips the rest fold behind a "+N" button, which opens a pop-up with the hidden chips.

**Message under the search box**
A single quiet line that appears after a search if something couldn't be used:
- Words it couldn't place: "oncology not found."
- Nothing usable at all: "Nothing in that to filter on."
- Things that exist in GlobalData but aren't part of this search, for example dates, sales forecasts, regulators, deals, a company with no drugs in the sample, or Phase IV. Each has its own short explanation.
- It disappears as soon as the search text changes.

**Microphone button**
Next to the search arrow. Lets the user speak their search instead of typing.
- Resting: a mic icon.
- Listening: animated level bars, and a click stops it.
- Getting ready: a spinner. This only happens the first time in Chrome.
- Not supported in this browser: greyed out.
- Mic blocked, or speech service unreachable: the icon turns red, with a tooltip saying why.
- Greyed out while a search is being read.
- The spoken words are added to the box. The user still presses the arrow to search.

## Start page

**Quick search (default)**
- "Drug Database" heading, the tabs, then a large search box with a mic button and an arrow button. The arrow is greyed until something is typed.
- Under it: "Commonly used filters", a row of 10 buttons (Therapy Area / Indication, Development Stage, Drug Geography, Drug Type, Molecule Type, Route of Administration, Company Name, Mechanism of Action, Regulatory Body, Marketing Status).
- Filter buttons:
  - Pressing one adds an empty filter chip to the filter bar ("Select value"), and the button turns blue.
  - Pressing it again removes the chip.
  - Once values are picked, the button shows a count, for example "(2)".
- Clicking "Select value", or a value on a chip, opens a small pop-up list of values with a search box. Each value shows how many drugs it covers, and values with none are greyed. Clicking a value picks it alone and closes the list. Ticking its box adds it and keeps the list open.
- "Add filter" opens a three-step pop-up: pick an area, then a filter, then a value. Each step has a back link and a search box.

**Reading a search (in between)**
- After pressing the arrow, the box locks and the words it recognises light up one after another, for about a second and a half.
- The arrow and mic are greyed during this.

**Search turned into filters**
- The filter bar card appears above the common filters, holding everything the search found, with "Clear filters" and "View N drugs".
- If some words couldn't be used, the message line appears above the card.
- If nothing could be used, no filters change and only the message shows.
- "View N drugs" goes to the results page.

**Advanced search tab**
- The search box and common filters are replaced by a box of columns that drill down, like Finder's column view.
- Switching tabs fades one set out and the other in, while the heading slides into place.
- Details of the columns are under "Advanced search columns" below.

## Results page

**Layout**
- Filter bar across the top.
- Under it, the search panel on the left and the results table on the right.
- The page opens with the search panel closed down to a thin strip holding a search icon ("Open search").

**Search panel**
- Opens wide for advanced search and narrower for quick search, sliding open and closed. A "Close search" button closes it.
- Advanced tab: the drill-down columns, three across.
- Quick tab: a search box that grows as you type, with the mic and arrow, and the message line under it. There are no common filter buttons on this page. A new search here replaces the current filters.
- Things that open the panel straight onto the right filter in the columns, with the matching row flashing briefly:
  - "Add filter"
  - clicking a chip's name or value
  - a column's "Add filter" or "Edit filters"

**Advanced search columns**
- A breadcrumb trail across the top ("All areas > Drugs > ...") and a "Search filters" box that narrows every visible column.
- First column: the areas (Drugs, Companies, and so on), each with a count.
- Second column: the filters in that area.
- Third column and on: the values, with a tick box on each. A value that has values under it, such as a therapy area or a region, shows a count and an arrow and opens another column.
- When there are more columns than fit, the newest comes in on the right and older ones slide off to the left. Clicking a breadcrumb brings one back.
- Row states:
  - open: blue tint
  - ticked: bold with a ticked box
  - something ticked further down: bold
  - no matching drugs: greyed
  - just ticked: a quick grey flash
- Ticking a parent ticks everything under it. A search box with no matches shows "No matches".
- After a typed search on the results panel's advanced tab, the columns walk themselves open to each filter in turn, about two seconds in all. Any click stops it.

**Table toolbar**
- Drug count ("48 drugs").
- When rows are selected: "N selected" and a "Clear" button.
- "Edit columns" and "Export". The second becomes "Export selected" when rows are selected.

**Table**
- A loading state of about half a second whenever the filters change: rows blurred with a spinner, the header still visible.
- Rows with a select box, hover and selected states. The first column (Drug Name) stays fixed while the rest scroll sideways.
- Development Stage shows coloured stage badges, and geography shows grey tags.
- Pages of 100 rows with previous and next buttons. The footer shows the selected count, the row range ("1–100 of 240") and the page number.
- No results:
  - "No drugs match these criteria", with a "Clear all filters" button.
  - With two or more filters, there's also a "Remove last criterion: ..." button.

**Column header and menu**
- Each header has a sort arrow, a pin icon when pinned, a small count when that column is filtered, a "..." menu on hover, and a drag edge to resize. Double-clicking the edge resets it.
- The menu has:
  - Sort ascending and Sort descending, which become "Clear sort" once that sort is on
  - "Add filter" or "Edit filters", plus "Clear filters", on columns you can filter
  - "Pin to left" or "Unpin column"
  - "Reset width"
  - "Hide column"
- Drug Name can't be hidden.

**Edit columns pop-up**
- "Showing N of N" and a search box.
- "In the grid": the visible columns, which you can drag to reorder (with the keyboard too) and click to hide.
- "Available": the hidden columns, where a click adds one back.
- Drug Name is fixed. When nothing is hidden, the list says "Every column is in the grid."

**Export**
Downloads a CSV of the visible columns, either for all results or for the selected rows only.

## What's not real

- All the data is a fixed sample built into the app. There's no backend.
- Reading a search is simple keyword matching, not AI.
- The table's loading state is a short timer, not a real request.
- The header (global search, bell, avatar, product tabs) does nothing.
- The microphone uses the browser's own speech recognition, so it only works where the browser supports it.
