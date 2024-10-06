# FoundryVTT-FindActorTokenByID

Finds a provided Actor/Token ID

Its a pretty verbose and hacky debugging tool.

### Installation

Install by adding it via the Add-on Modules -> Install Module -> "Manifest URL" -> add the following url -> Install  
`https://raw.githubusercontent.com/WhosMyName/FoundryVTT-FindActorTokenByID/refs/heads/main/module.json`

Wait for the download to finsih and open your module directory at {userdir}/FoundryVTT/Data/modules/findactortokenbyid.  
Edit the file called `findtoken.js` and edit the id in Line 4: searchID and replace the id with your id. Save and exit.

Start your World and activate the Module in  
Game Settings -> Manage Modules -> FindActorTokenByID -> check the mark , save the module settings and reload.

## Usage

The addon searches for specified id in the actor, actordelta and token objects in their respective id and uuid variables.
To use the addon press F12 in your world and hit space to pause/unpause the game, executing the addon.

Repeatedly edit/exchange/save the ids and reload FoundryVTT using F5 to repeat this for multiple IDs.

Disable the Addon in the Module Settings after usage.
