<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the standalone Korean bus game in one HTML file; its optional tutorial completion is stored in browser storage with a safe fallback so the game works offline and without storage.
- Render the bus game's original pixel scenery on a low-resolution canvas and embed its Korean pixel font in the standalone HTML so artwork stays crisp and works offline.
