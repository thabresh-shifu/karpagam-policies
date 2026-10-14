// Fills the store details (phone, email, address, hours) from the store settings the
// admin edits, so a change in the admin app shows here without editing this site.
// The anon key is public by design; store_settings is readable by anyone. The text
// already in the page stays if the request fails.
(function () {
  var URL = 'https://qrvdilvltizqohwczhgk.supabase.co';
  var KEY = 'sb_publishable_tUlp8wwDS9eXGLjU3yHpuQ_oUNPsN_-';
  fetch(URL + '/rest/v1/store_settings?id=eq.1&select=store_phone,store_email,store_address,store_hours', {
    headers: { apikey: KEY, Authorization: 'Bearer ' + KEY }
  })
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(function (rows) {
      var s = rows && rows[0];
      if (!s) return;
      var map = { phone: s.store_phone, email: s.store_email, address: s.store_address, hours: s.store_hours };
      document.querySelectorAll('[data-store]').forEach(function (el) {
        var v = map[el.getAttribute('data-store')];
        if (v) el.textContent = v;
      });
    })
    .catch(function () {});
})();
