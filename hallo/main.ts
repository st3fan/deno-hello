// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_request: Request) => {
    return new Response("<h1>Hallo, Wereld!</h1>", {
        headers: { "content-type": "text/html" },
    });
});
