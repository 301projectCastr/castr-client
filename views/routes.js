'use strict';

page('/', ctx => app.monView.checkLocalStorage()); // main view logged in or not.
// page('/mon/new', ctx => );  // create new pokemon.
// page('/mon/:mon_id/', ctx => ); // detail view after creating new.
// page('/mon/:mon_id/delete', ctx => ); // delete pokemon from user profile/db.
// page('/pick_fight', ctx => ); // pick fight page.
// page('/fight', ctx => ); // fight page.

page('/logout', ctx => app.monView.logout());

// page('/', () => getMonStats());
page();

