# SonarCloud Security Findings

Project: `d2v6_Ghost`
Branch: `main`

## Security Issues

Total security issues fetched: 67 of 67

### Ensure that tainted data is validated before being used to construct a client-side request URL.

- Key: `AZ3i2m3ns6Hfl3oGVcxY`
- Rule: `jssecurity:S8476`
- Severity: `MINOR`
- Status: `OPEN`
- Location: `ghost/core/core/frontend/src/admin-auth/message-handler.js:35`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `20min`

### Ensure that tainted data is validated before being used to construct a client-side request URL.

- Key: `AZ3Z1cun5d3KDogvc6zN`
- Rule: `jssecurity:S8476`
- Severity: `MINOR`
- Status: `OPEN`
- Location: `ghost/core/core/frontend/src/admin-auth/message-handler.js:34`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `20min`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1dVp5d3KDogvc7F2`
- Rule: `typescript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/unit/server/services/verification/verification-webhook-service.test.ts:112`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Verify the origin of the received message.

- Key: `AZ3Z1bGB5d3KDogvc6Wh`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/core/core/server/services/koenig/node-renderers/transistor-renderer.js:160`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1h7X5d3KDogvc853`
- Rule: `typescript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `e2e/visual-regression/auth.setup.ts:16`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_F`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:66`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_G`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:67`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Specify a target origin for this message.

- Key: `AZ3Z1gAq5d3KDogvc8MM`
- Rule: `typescript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `apps/admin/src/layout/app-sidebar/hooks/use-featurebase.ts:126`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Specify a target origin for this message.

- Key: `AZ3Z1eg95d3KDogvc7me`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/services/billing.js:105`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Ty`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:716`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_B`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:12`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_C`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:13`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_D`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:50`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_E`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:51`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_H`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:102`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_I`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:137`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_J`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:138`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_K`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:169`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1fhY5d3KDogvc7_L`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/admin/tests/unit/controllers/reset-test.js:170`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Make sure this permission is safe.

- Key: `AZ3Z1aOa5d3KDogvc6Jn`
- Rule: `javascript:S2612`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/core/server/data/importer/import-manager.js:229`
- Type: `VULNERABILITY`
- Code attribute: `CONVENTIONAL`
- Tags: `cwe`
- Effort: `5min`

### Verify the origin of the received message.

- Key: `AZ3Z1hBX5d3KDogvc8dQ`
- Rule: `typescript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `apps/comments-ui/test/utils/e2e.ts:34`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1dNp5d3KDogvc7DJ`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/unit/server/services/settings-helpers/settings-helpers.test.js:120`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1d_n5d3KDogvc7fD`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-api/members/feedback.test.js:21`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1eAE5d3KDogvc7fH`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-api/members/middleware.test.js:67`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1eAE5d3KDogvc7fI`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-api/members/middleware.test.js:189`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1eLm5d3KDogvc7in`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-frontend/members.test.js:250`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1eLm5d3KDogvc7io`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-frontend/members.test.js:368`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1eLm5d3KDogvc7ip`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-frontend/members.test.js:387`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1eLm5d3KDogvc7iq`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-frontend/members.test.js:422`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1eLm5d3KDogvc7ir`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-frontend/members.test.js:455`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1eLm5d3KDogvc7is`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-frontend/members.test.js:483`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1eLm5d3KDogvc7it`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/e2e-frontend/members.test.js:516`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1dPz5d3KDogvc7Dg`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/unit/server/services/webhooks/trigger.test.js:205`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Specify a target origin for this message.

- Key: `AZ3Z1hXk5d3KDogvc8qR`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `apps/portal/src/components/popup-modal.js:141`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Specify a target origin for this message.

- Key: `AZ3Z1edk5d3KDogvc7lp`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/services/explore.js:84`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Make sure not using resource integrity feature is safe here.

- Key: `AZ3Z1hPI5d3KDogvc8iA`
- Rule: `Web:S5725`
- Severity: `MINOR`
- Status: `OPEN`
- Location: `apps/signup-form/preview.html:101`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `former-hotspot`
- Effort: `5min`

### Make sure not using resource integrity feature is safe here.

- Key: `AZ3Z1hPI5d3KDogvc8h7`
- Rule: `Web:S5725`
- Severity: `MINOR`
- Status: `OPEN`
- Location: `apps/signup-form/preview.html:22`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `former-hotspot`
- Effort: `5min`

### Make sure not using resource integrity feature is safe here.

- Key: `AZ3Z1hPI5d3KDogvc8h8`
- Rule: `Web:S5725`
- Severity: `MINOR`
- Status: `OPEN`
- Location: `apps/signup-form/preview.html:39`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `former-hotspot`
- Effort: `5min`

### Make sure not using resource integrity feature is safe here.

- Key: `AZ3Z1hPI5d3KDogvc8h_`
- Rule: `Web:S5725`
- Severity: `MINOR`
- Status: `OPEN`
- Location: `apps/signup-form/preview.html:83`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `former-hotspot`
- Effort: `5min`

### Make sure not using resource integrity feature is safe here.

- Key: `AZ3Z1hPI5d3KDogvc8h9`
- Rule: `Web:S5725`
- Severity: `MINOR`
- Status: `OPEN`
- Location: `apps/signup-form/preview.html:56`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `former-hotspot`
- Effort: `5min`

### Make sure not using resource integrity feature is safe here.

- Key: `AZ3Z1hPI5d3KDogvc8h-`
- Rule: `Web:S5725`
- Severity: `MINOR`
- Status: `OPEN`
- Location: `apps/signup-form/preview.html:71`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `former-hotspot`
- Effort: `5min`

### Specify a target origin for this message.

- Key: `AZ3Z1fAQ5d3KDogvc7zJ`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/components/gh-billing-iframe.js:75`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Specify a target origin for this message.

- Key: `AZ3Z1eyE5d3KDogvc7tr`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/components/gh-explore-iframe.js:68`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Verify the origin of the received message.

- Key: `AZ3Z1edk5d3KDogvc7lj`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/services/explore.js:48`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Specify a target origin for this message.

- Key: `AZ3Z1edk5d3KDogvc7lo`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/services/explore.js:77`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Change this code to not perform redirects based on user-controlled data.

- Key: `AZ3Z1cPS5d3KDogvc6tf`
- Rule: `jssecurity:S5146`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/core/frontend/web/middleware/handle-image-sizes.js:51`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`
- Effort: `30min`

### Revoke and change this password, as it is compromised.

- Key: `AZ3Z1dBB5d3KDogvc65A`
- Rule: `javascript:S6437`
- Severity: `BLOCKER`
- Status: `OPEN`
- Location: `ghost/core/test/unit/server/services/members/members-api/services/token-service.test.js:62`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `1h`

### Specify a target origin for this message.

- Key: `AZ3Z1fAQ5d3KDogvc7zI`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/components/gh-billing-iframe.js:61`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Specify a target origin for this message.

- Key: `AZ3Z1fAQ5d3KDogvc7zK`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/components/gh-billing-iframe.js:101`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Specify a target origin for this message.

- Key: `AZ3Z1eg95d3KDogvc7md`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/services/billing.js:89`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Specify a target origin for this message.

- Key: `AZ3Z1hZ-5d3KDogvc8sD`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `apps/portal/src/app.js:151`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Specify a target origin for this message.

- Key: `AZ3Z1hXk5d3KDogvc8qP`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `apps/portal/src/components/popup-modal.js:85`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Verify the origin of the received message.

- Key: `AZ3Z1eg95d3KDogvc7mT`
- Rule: `javascript:S2819`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/admin/app/services/billing.js:24`
- Type: `VULNERABILITY`
- Code attribute: `COMPLETE`
- Tags: `cwe`, `html5`, `type-dependent`
- Effort: `10min`

### Use only strong cipher algorithms when signing this JWT.

- Key: `AZ3Z1dFB5d3KDogvc659`
- Rule: `javascript:S5659`
- Severity: `CRITICAL`
- Status: `OPEN`
- Location: `ghost/core/test/unit/server/services/auth/members/index.test.js:56`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`, `privacy`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dyF5d3KDogvc7at`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/api.js:99`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Tp`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:641`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Tq`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:652`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Tr`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:660`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Ts`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:668`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Tt`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:676`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Tu`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:684`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Tv`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:692`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Tw`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:700`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvh5d3KDogvc7Tx`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:708`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvi5d3KDogvc7ZQ`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:1859`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvi5d3KDogvc7ZS`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:1891`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

### Review this potentially hard-coded password.

- Key: `AZ3Z1dvi5d3KDogvc7Zn`
- Rule: `javascript:S2068`
- Severity: `MAJOR`
- Status: `OPEN`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:2853`
- Type: `VULNERABILITY`
- Code attribute: `TRUSTWORTHY`
- Tags: `cwe`
- Effort: `30min`

## Security Hotspots

Total security hotspots fetched: 862 of 862

### Make sure that executing this OS command is safe here.

- Key: `AZ3Z1af35d3KDogvc6Ml`
- Rule: `javascript:S4721`
- Status: `TO_REVIEW`
- Vulnerability probability: `HIGH`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:173`
- Security category: `command-injection`

### Make sure that executing this OS command is safe here.

- Key: `AZ3Z1h-R5d3KDogvc87L`
- Rule: `javascript:S4721`
- Status: `TO_REVIEW`
- Vulnerability probability: `HIGH`
- Location: `scripts/lib/release-notes.js:23`
- Security category: `command-injection`

### Make sure that executing this OS command is safe here.

- Key: `AZ3Z1h-I5d3KDogvc87I`
- Rule: `javascript:S4721`
- Status: `TO_REVIEW`
- Vulnerability probability: `HIGH`
- Location: `scripts/release.js:51`
- Security category: `command-injection`

### Make sure that executing this OS command is safe here.

- Key: `AZ3Z1h995d3KDogvc87D`
- Rule: `javascript:S4721`
- Status: `TO_REVIEW`
- Vulnerability probability: `HIGH`
- Location: `scripts/test/resolve-base-tag.test.js:17`
- Security category: `command-injection`

### Make sure that executing this OS command is safe here.

- Key: `AZ3Z1h995d3KDogvc87E`
- Rule: `javascript:S4721`
- Status: `TO_REVIEW`
- Vulnerability probability: `HIGH`
- Location: `scripts/test/resolve-base-tag.test.js:102`
- Security category: `command-injection`

### Make sure that executing this OS command is safe here.

- Key: `AZ3Z1h995d3KDogvc87F`
- Rule: `javascript:S4721`
- Status: `TO_REVIEW`
- Vulnerability probability: `HIGH`
- Location: `scripts/test/resolve-base-tag.test.js:108`
- Security category: `command-injection`

### Make sure that executing this OS command is safe here.

- Key: `AZ3Z1h995d3KDogvc87G`
- Rule: `javascript:S4721`
- Status: `TO_REVIEW`
- Vulnerability probability: `HIGH`
- Location: `scripts/test/resolve-base-tag.test.js:117`
- Security category: `command-injection`

### Make sure that executing this OS command is safe here.

- Key: `AZ3Z1h995d3KDogvc87H`
- Rule: `javascript:S4721`
- Status: `TO_REVIEW`
- Vulnerability probability: `HIGH`
- Location: `scripts/test/resolve-base-tag.test.js:133`
- Security category: `command-injection`

### Make sure the content length limit is safe here.

- Key: `AZ3Z1b_L5d3KDogvc6q9`
- Rule: `javascript:S5693`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/web/api/middleware/upload.js:63`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1hZ-5d3KDogvc8sk`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/portal/src/app.js:844`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1ht05d3KDogvc82L`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/sodo-search/src/index.js:35`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1fEv5d3KDogvc734`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/components/aspect-ratio-box.js:24`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1e2S5d3KDogvc7ui`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/components/gh-twitter-url-input.js:38`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1fUw5d3KDogvc771`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/controllers/lexical-editor.js:42`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1fUw5d3KDogvc772`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/controllers/lexical-editor.js:42`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1fUw5d3KDogvc77-`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/controllers/lexical-editor.js:287`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1fUw5d3KDogvc77_`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/controllers/lexical-editor.js:287`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1fVl5d3KDogvc78s`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/controllers/members.js:305`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1eh55d3KDogvc7m0`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/services/unsplash.js:238`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1fo_5d3KDogvc8Ax`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/tests/acceptance/editor/publish-flow-test.js:666`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1ct35d3KDogvc6y6`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/frontend/helpers/get.js:157`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1cst5d3KDogvc6ym`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/frontend/helpers/navigation.js:64`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1cst5d3KDogvc6yn`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/frontend/helpers/navigation.js:65`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1cgB5d3KDogvc6xA`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/frontend/meta/paginated-url.js:15`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1cSq5d3KDogvc6ub`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/frontend/services/theme-engine/handlebars/utils.js:17`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1cPS5d3KDogvc6te`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/frontend/web/middleware/handle-image-sizes.js:12`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1cFE5d3KDogvc6r5`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/adapters/storage/LocalStorageBase.js:52`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1cE35d3KDogvc6r3`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/adapters/storage/utils.js:66`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1Zwh5d3KDogvc6HZ`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/api/endpoints/utils/serializers/output/utils/post-gating.js:10`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1aaN5d3KDogvc6K7`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/importer/handlers/revue.js:21`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1aYI5d3KDogvc6Kk`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/importer/importers/json-to-html.js:95`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bGO5d3KDogvc6Wp`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/koenig/node-renderers/call-to-action-renderer.js:78`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bF25d3KDogvc6Wb`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/koenig/node-renderers/gallery-renderer.js:123`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bIC5d3KDogvc6W6`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/koenig/node-renderers/image-renderer.js:177`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bLQ5d3KDogvc6Xl`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/koenig/render-utils/replacement-strings.js:46`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bKO5d3KDogvc6XN`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/koenig/render-utils/srcset-attribute.js:20`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bKn5d3KDogvc6XW`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/koenig/render-utils/tagged-template-fns.js:5`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bR65d3KDogvc6Zp`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/lib/email-content-generator.js:5`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bEf5d3KDogvc6WA`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/member-attribution/outbound-link-tagger.js:101`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1b4y5d3KDogvc6pr`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/notifications/notifications.js:93`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bXV5d3KDogvc6aE`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/route-settings/validate.js:50`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bXV5d3KDogvc6aO`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/route-settings/validate.js:327`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1bXV5d3KDogvc6aS`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/route-settings/validate.js:401`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1b2k5d3KDogvc6o3`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/slack.js:74`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1buw5d3KDogvc6nf`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/webhooks/serialize.js:7`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1b_L5d3KDogvc6q_`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/web/api/middleware/upload.js:211`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1eN05d3KDogvc7jC`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/scripts/pack.js:61`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1d4n5d3KDogvc7cf`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-api/admin/config.test.js:42`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1d9g5d3KDogvc7ep`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-api/admin/explore.test.js:30`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1d9M5d3KDogvc7eX`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-api/admin/posts.test.js:361`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1d5A5d3KDogvc7cl`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-api/admin/settings.test.js:25`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1d0N5d3KDogvc7bY`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-api/admin/site.test.js:16`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1d_05d3KDogvc7fE`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-api/members/site.test.js:8`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1eLm5d3KDogvc7il`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-frontend/members.test.js:140`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1eLm5d3KDogvc7iu`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-frontend/members.test.js:709`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1eLm5d3KDogvc7iw`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-frontend/members.test.js:729`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1eLm5d3KDogvc7iy`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-frontend/members.test.js:752`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1eLm5d3KDogvc7i0`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/e2e-frontend/members.test.js:775`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1dkY5d3KDogvc7Np`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:269`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1dc15d3KDogvc7Je`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:65`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1dc15d3KDogvc7Jy`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:306`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1dw35d3KDogvc7aU`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/utils/e2e-framework.js:523`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1dxC5d3KDogvc7aW`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/utils/mocha-retry-reporter.js:8`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1fwn5d3KDogvc8Ew`
- Rule: `javascript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/i18n/test/utils.js:5`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1hcx5d3KDogvc8tq`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/activitypub/src/utils/content-formatters.ts:37`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1hcx5d3KDogvc8tx`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/activitypub/src/utils/content-formatters.ts:71`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1hcg5d3KDogvc8tg`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/activitypub/src/utils/get-reading-time.ts:5`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1hlY5d3KDogvc8zF`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/activitypub/test/acceptance/my-profile.test.ts:187`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1hoJ5d3KDogvc80g`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/admin-x-framework/src/utils/errors.ts:28`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1gvz5d3KDogvc8Xy`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/admin-x-settings/src/utils/helpers.ts:47`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1gu65d3KDogvc8XL`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/admin-x-settings/src/utils/social-urls/bluesky.ts:16`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1gvZ5d3KDogvc8Xa`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/admin-x-settings/src/utils/social-urls/mastodon.ts:25`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1gvZ5d3KDogvc8Xd`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/admin-x-settings/src/utils/social-urls/mastodon.ts:62`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1gvZ5d3KDogvc8Xf`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/admin-x-settings/src/utils/social-urls/mastodon.ts:92`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1gvZ5d3KDogvc8Xh`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/admin-x-settings/src/utils/social-urls/mastodon.ts:101`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1gvO5d3KDogvc8XW`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/admin-x-settings/src/utils/social-urls/twitter.ts:14`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1hBl5d3KDogvc8dW`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/comments-ui/src/utils/helpers.ts:7`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1hBl5d3KDogvc8dZ`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/comments-ui/src/utils/helpers.ts:32`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1hBN5d3KDogvc8dA`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/comments-ui/test/utils/mocked-api.ts:8`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1gQ05d3KDogvc8QA`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/posts/src/views/comments/components/comment-header.tsx:13`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1gJa5d3KDogvc8OZ`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/posts/src/views/members/components/bulk-action-modals/import-members/mapping.ts:49`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1f2K5d3KDogvc8GB`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/shade/src/components/ui/icon.ts:31`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h7O5d3KDogvc852`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/data-factory/utils.ts:24`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85V`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:42`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85W`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:43`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85X`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:64`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85Y`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:65`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85Z`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:86`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85a`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:87`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85b`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:107`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85c`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:108`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85d`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:128`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1h5S5d3KDogvc85e`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/member-signup-types.test.ts:129`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1cEr5d3KDogvc6rw`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/adapters/storage/S3Storage.ts:45`
- Security category: `dos`

### Make sure the regex used here, which is vulnerable to super-linear runtime due to backtracking, cannot lead to denial of service.

- Key: `AZ3Z1cEr5d3KDogvc6rx`
- Rule: `typescript:S5852`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/adapters/storage/S3Storage.ts:47`
- Security category: `dos`

### Copying recursively might inadvertently add sensitive data to the container. Make sure it is safe here.

- Key: `AZ3Z1h-Z5d3KDogvc87M`
- Rule: `docker:S6470`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `Dockerfile.production:28`
- Security category: `permission`

### This image might run with "root" as the default user. Make sure it is safe here.

- Key: `AZ3Z1h8R5d3KDogvc86G`
- Rule: `docker:S6471`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `docker/dev-gateway/Dockerfile:1`
- Security category: `permission`

### The "node" image runs with "root" as the default user. Make sure it is safe here.

- Key: `AZ3Z1h8A5d3KDogvc85-`
- Rule: `docker:S6471`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `docker/ghost-dev/Dockerfile:6`
- Security category: `permission`

### This image might run with "root" as the default user. Make sure it is safe here.

- Key: `AZ3Z1h895d3KDogvc86s`
- Rule: `docker:S6471`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `docker/tb-cli/Dockerfile:1`
- Security category: `permission`

### Make sure that this dynamic injection or execution of code is safe.

- Key: `AZ3Z1dql5d3KDogvc7SL`
- Rule: `javascript:S1523`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/unit/frontend/src/admin-auth-message-handler.test.js:33`
- Security category: `rce`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1hVL5d3KDogvc8nf`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/portal/src/components/pages/recommendations-page.js:155`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1hYb5d3KDogvc8q_`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/portal/src/utils/fixtures-generator.js:12`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1hYb5d3KDogvc8rB`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/portal/src/utils/fixtures-generator.js:18`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1fES5d3KDogvc73o`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/components/gh-error-message.js:22`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1edE5d3KDogvc7lW`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/app/services/custom-views.js:36`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1fd85d3KDogvc7-F`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/mirage/config/stats.js:81`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1fd85d3KDogvc7-G`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/mirage/config/stats.js:101`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1fd85d3KDogvc7-H`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/mirage/config/stats.js:102`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1fdQ5d3KDogvc79-`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/mirage/factories/member.js:6`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1fdi5d3KDogvc7-D`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/admin/mirage/factories/offer.js:6`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1cvI5d3KDogvc6zX`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/frontend/src/ghost-stats/ghost-stats.js:68`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mm`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:256`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mp`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:277`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mq`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:288`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mr`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:304`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Ms`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:311`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mt`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:407`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mu`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:417`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mv`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:419`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mw`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:424`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mx`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:425`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6My`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:429`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6Mz`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:446`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6M0`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:453`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6M1`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:461`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6M2`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:471`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6M4`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:559`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6M5`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:563`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6M6`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:565`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6M7`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:567`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6M8`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:579`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1af35d3KDogvc6M9`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:604`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1b0L5d3KDogvc6oH`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/email-analytics/jobs/index.js:27`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1b0L5d3KDogvc6oI`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/email-analytics/jobs/index.js:29`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1a965d3KDogvc6UC`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/members/jobs/index.js:16`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1a965d3KDogvc6UD`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/members/jobs/index.js:17`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1a965d3KDogvc6UE`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/members/jobs/index.js:18`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1b3D5d3KDogvc6pE`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/milestones/service.js:6`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1bip5d3KDogvc6kw`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/outbox/jobs/index.js:15`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1bip5d3KDogvc6kx`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/outbox/jobs/index.js:17`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1b915d3KDogvc6qg`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/update-check/index.js:77`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1b915d3KDogvc6qh`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/update-check/index.js:78`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1b915d3KDogvc6qi`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/update-check/index.js:79`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1eG35d3KDogvc7hB`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/integration/services/mailgun-email-suppression-list.test.js:99`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1eG35d3KDogvc7hC`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/integration/services/mailgun-email-suppression-list.test.js:127`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1eIh5d3KDogvc7hg`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/integration/services/members/send-gift-reminders.test.js:38`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1dxx5d3KDogvc7al`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/utils/browser-test-utils.js:92`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1dwq5d3KDogvc7Zy`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/utils/fixture-utils.js:102`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1dxl5d3KDogvc7ah`
- Rule: `javascript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/test/utils/overrides.js:18`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1gHJ5d3KDogvc8Ns`
- Rule: `typescript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/posts/src/hooks/use-filter-params.ts:60`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1f0Q5d3KDogvc8F6`
- Rule: `typescript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/shade/src/components/ui/filters.tsx:2514`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1f0Q5d3KDogvc8F9`
- Rule: `typescript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/shade/src/components/ui/filters.tsx:2596`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1f2p5d3KDogvc8GH`
- Rule: `typescript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/shade/src/components/ui/sidebar.tsx:665`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1fxb5d3KDogvc8FD`
- Rule: `typescript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/shade/src/components/ui/skeleton.tsx:28`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1hG35d3KDogvc8fM`
- Rule: `typescript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `apps/stats/src/hooks/use-filter-params.ts:61`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1h4_5d3KDogvc85M`
- Rule: `typescript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `e2e/tests/public/comments.test.ts:44`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1bgy5d3KDogvc6kW`
- Rule: `typescript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/recommendations/service/incoming-recommendation-service.ts:91`
- Security category: `weak-cryptography`

### Make sure that using this pseudorandom number generator is safe here.

- Key: `AZ3Z1bhB5d3KDogvc6kX`
- Rule: `typescript:S2245`
- Status: `TO_REVIEW`
- Vulnerability probability: `MEDIUM`
- Location: `ghost/core/core/server/services/recommendations/service/recommendation-service.ts:68`
- Security category: `weak-cryptography`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1fgd5d3KDogvc7-0`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/admin/mirage/routes-dev.js:21`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1fgA5d3KDogvc7-m`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/admin/mirage/routes-test.js:120`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1fgA5d3KDogvc7-n`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/admin/mirage/routes-test.js:124`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1fll5d3KDogvc8AH`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/admin/tests/integration/components/gh-unsplash-photo-test.js:31`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1fnQ5d3KDogvc8AZ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/admin/tests/integration/helpers/gh-url-preview-test.js:12`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1cZo5d3KDogvc6vs`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/frontend/services/rss/generate-feed.js:82`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1cXK5d3KDogvc6vf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/frontend/services/sitemap/base-site-map-generator.js:11`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1cXK5d3KDogvc6vg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/frontend/services/sitemap/base-site-map-generator.js:12`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1cYK5d3KDogvc6vh`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/frontend/services/sitemap/site-map-index-generator.js:9`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1af35d3KDogvc6Mj`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:65`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1af35d3KDogvc6Mk`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/data/tinybird/scripts/docker-analytics-manager.js:82`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1cJr5d3KDogvc6sl`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/lib/request-external.js:21`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1cJr5d3KDogvc6sm`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/lib/request-external.js:38`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1azn5d3KDogvc6Qm`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/models/user.js:85`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d795d3KDogvc7d8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/members-edit-subscriptions.test.js:54`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d0C5d3KDogvc7bW`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/members-newsletters.test.js:26`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d0C5d3KDogvc7bX`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/members-newsletters.test.js:70`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d165d3KDogvc7cR`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/members.test.js:545`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7bt`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:76`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7bv`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:205`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7bw`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:207`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7b0`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:623`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7b3`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:655`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7b7`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:716`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7b8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:720`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7b9`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:727`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7cC`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:748`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7cD`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:750`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7cE`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:752`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7cF`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:756`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7cG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:763`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7cJ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:785`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7cK`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:789`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d1U5d3KDogvc7cL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:796`
- Security category: `encrypt-data`

### Using ftp protocol is insecure. Use sftp, scp or ftps instead.

- Key: `AZ3Z1d7n5d3KDogvc7d3`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/recommendations.test.js:508`
- Security category: `encrypt-data`

### Using ftp protocol is insecure. Use sftp, scp or ftps instead.

- Key: `AZ3Z1d7n5d3KDogvc7d4`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/recommendations.test.js:509`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d7n5d3KDogvc7d5`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/recommendations.test.js:656`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d6n5d3KDogvc7dd`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/users.test.js:196`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d6n5d3KDogvc7de`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/users.test.js:209`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eAE5d3KDogvc7fG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/members/middleware.test.js:45`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1d_R5d3KDogvc7e-`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/members/webhooks.test.js:185`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7fm`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:41`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7fn`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:65`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7fo`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:80`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7fr`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:106`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7fu`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:141`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7fv`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:154`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7fy`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:174`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f1`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:202`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f2`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:217`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f3`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:239`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f4`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:252`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f5`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:275`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f6`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:283`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f7`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:314`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:345`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f9`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:375`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f-`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:397`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7f_`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:405`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7gA`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:427`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eB_5d3KDogvc7gB`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/webmentions/webmentions.test.js:439`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eLX5d3KDogvc7ij`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-frontend/advanced-url-config.test.js:41`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eHS5d3KDogvc7hK`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/integration/services/q-email-addresses.test.js:113`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eHS5d3KDogvc7hL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/integration/services/q-email-addresses.test.js:130`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eD15d3KDogvc7gf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/legacy/models/model-users.test.js:85`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eD15d3KDogvc7gg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/legacy/models/model-users.test.js:91`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2n-ds6Hfl3oGVcxq`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/legacy/models/model-users.test.js:239`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1eD15d3KDogvc7gi`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/legacy/models/model-users.test.js:241`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Nd`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:161`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Ne`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:161`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Nf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:171`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Ng`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:171`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Nh`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:181`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Ni`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:181`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Nj`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:202`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Nk`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:202`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Nl`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:212`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Nm`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:212`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxd`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:223`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxe`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:223`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:238`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:238`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Ns`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:253`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkY5d3KDogvc7Nt`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:253`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxh`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:264`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxi`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:264`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxj`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:284`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxk`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:284`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxl`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:298`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxm`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:298`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxn`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:312`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3i2niMs6Hfl3oGVcxo`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/controller.test.js:312`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkl5d3KDogvc7Nx`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/middleware.test.js:263`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dkl5d3KDogvc7Ny`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/apps/private-blogging/middleware.test.js:315`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7MZ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:96`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7Mb`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:108`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7Md`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:118`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7Me`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:127`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7Mg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:137`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7Mi`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:148`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7Mk`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:157`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7Ml`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:160`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7Mo`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:173`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dgh5d3KDogvc7Mp`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/ghost-head.test.js:176`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dj15d3KDogvc7NN`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/url.test.js:128`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dj15d3KDogvc7NO`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/url.test.js:131`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dj15d3KDogvc7NP`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/url.test.js:235`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dj15d3KDogvc7NQ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/url.test.js:238`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dj15d3KDogvc7NR`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/url.test.js:253`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dj15d3KDogvc7NS`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/helpers/url.test.js:256`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RH`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:22`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RI`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:25`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RJ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:28`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RK`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:32`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:117`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RM`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:120`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RN`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:123`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RO`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:127`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RP`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:169`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RQ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:172`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RR`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:175`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RS`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:179`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RT`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:219`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RU`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:222`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RV`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:225`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RW`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:227`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RX`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:230`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7RZ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:260`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Ra`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:265`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rb`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:270`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rc`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:274`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rd`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:280`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Re`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:283`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:286`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:288`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rh`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:291`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rj`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:311`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rk`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:313`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rl`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:315`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dou5d3KDogvc7Rm`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/image-dimensions.test.js:317`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PB`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:36`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PC`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:37`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PD`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:47`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PE`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:49`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PF`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:57`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:65`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PH`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:67`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PI`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:71`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PJ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:87`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PK`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:104`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:110`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PM`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:114`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PN`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:122`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PO`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:127`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PP`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:131`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PQ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:134`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PR`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:139`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PS`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:147`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PT`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:149`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PU`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:157`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PV`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:165`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PW`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:167`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PX`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:171`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PY`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:187`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7PZ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:204`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pa`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:210`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pb`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:214`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pc`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:222`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pd`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:227`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pe`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:231`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:234`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:239`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Ph`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:251`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pi`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:253`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pj`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:284`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pk`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:290`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pl`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:297`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pm`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:305`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pn`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:307`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Po`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:311`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pp`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:315`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pq`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:317`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pr`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:321`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Ps`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:333`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pt`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:352`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pu`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:356`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pv`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:360`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pw`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:368`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Px`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:371`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Py`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:375`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Pz`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:378`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P0`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:381`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P1`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:390`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P2`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:392`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P3`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:413`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P4`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:417`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P5`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:425`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P6`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:434`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P7`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:436`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:460`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P9`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:464`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P-`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:472`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7P_`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:480`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QA`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:483`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QB`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:489`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QC`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:497`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QD`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:511`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QE`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:514`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QF`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:517`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:520`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QH`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:528`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QI`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:531`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QJ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:538`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QK`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:544`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:552`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QM`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:566`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QN`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:569`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QO`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:572`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QP`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:575`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QQ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:583`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QR`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:586`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QS`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:592`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QT`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:600`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QU`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:614`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QV`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:617`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QW`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:620`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QX`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:623`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QY`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:637`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7QZ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:643`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qa`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:653`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qb`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:655`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qc`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:663`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qd`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:668`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qe`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:678`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:680`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:688`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qh`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:693`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qi`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:718`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qj`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:724`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qk`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:746`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Ql`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:752`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qm`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:754`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qn`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:758`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qo`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:760`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qp`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:762`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qq`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:777`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qr`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:779`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qs`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:781`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qt`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:799`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qu`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:804`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qv`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:805`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qw`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:809`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qx`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:811`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qy`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:815`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Qz`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:817`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q0`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:830`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q1`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:832`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q2`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:839`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q3`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:841`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q4`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:864`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q5`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:871`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q6`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:893`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q7`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:902`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:914`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q9`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:923`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q-`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:931`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7Q_`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:936`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7RA`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:937`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7RB`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:941`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7RC`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:943`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7RD`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:955`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7RE`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:957`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7RF`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:980`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dog5d3KDogvc7RG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/schema.test.js:991`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Ro`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:15`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Rp`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:19`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Rq`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:48`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Rr`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:54`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Rs`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:59`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Rt`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:63`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Ru`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:79`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Rv`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:83`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Rw`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:89`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Rx`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:109`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Ry`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:115`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7Rz`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:120`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7R0`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:124`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7R1`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:140`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7R2`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:166`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1do75d3KDogvc7R3`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/meta/structured-data.test.js:171`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dmw5d3KDogvc7Ol`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/rss/cache.test.js:18`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dm_5d3KDogvc7Oo`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/rss/generate-feed.test.js:36`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dm_5d3KDogvc7Op`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/rss/generate-feed.test.js:60`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dm_5d3KDogvc7Oq`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/rss/generate-feed.test.js:94`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dm_5d3KDogvc7Ox`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/rss/generate-feed.test.js:192`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7N_`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:62`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OA`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:63`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OB`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:64`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OC`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:65`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OD`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:76`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OF`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:195`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:196`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OH`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:197`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OI`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:198`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OJ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:200`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OK`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:208`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:215`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OM`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:245`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7ON`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:276`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OO`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:278`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OQ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:286`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OR`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:330`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OS`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:331`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dl45d3KDogvc7OT`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/frontend/services/sitemap/generator.test.js:332`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1db65d3KDogvc7I5`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/local-base-storage.test.js:97`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7I6`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:24`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7I7`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:28`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7I8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:38`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7I9`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:42`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7I-`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:56`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7I_`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:70`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JA`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:80`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JB`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:84`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JC`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:90`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JD`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:96`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JE`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:100`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JF`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:110`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:114`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JH`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:128`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JI`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:142`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JJ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:152`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JK`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:156`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:168`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JM`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:177`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JN`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:181`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JO`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:188`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JP`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:199`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JQ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:208`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dcE5d3KDogvc7JR`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/utils.test.js:217`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1ddK5d3KDogvc7KS`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/cached-image-size-from-url.test.js:21`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1ddK5d3KDogvc7KT`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/cached-image-size-from-url.test.js:65`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1ddK5d3KDogvc7KU`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/cached-image-size-from-url.test.js:96`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1ddK5d3KDogvc7KV`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/cached-image-size-from-url.test.js:122`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1ddK5d3KDogvc7KW`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/cached-image-size-from-url.test.js:148`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jd`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:46`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:90`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:93`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jh`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:97`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jj`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:188`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jk`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:192`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jl`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:195`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jm`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:204`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jo`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:234`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jp`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:249`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jq`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:252`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jr`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:256`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Js`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:259`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jt`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:262`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Ju`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:281`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jv`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:287`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jw`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:288`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jx`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:292`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7Jz`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:368`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7J0`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:370`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7J1`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:386`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7J2`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:388`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7J8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:523`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7J9`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:524`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7J-`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:557`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KA`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:576`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KC`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:592`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KD`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:595`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KF`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:611`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:614`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KI`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:638`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KK`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:650`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:657`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KM`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:659`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dc15d3KDogvc7KO`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/image/image-size.test.js:684`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1deq5d3KDogvc7L_`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/mobiledoc.test.js:358`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7LR`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:321`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7LS`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:328`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7LT`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:342`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7LU`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:344`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7LV`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:351`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7LW`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:355`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7LX`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:358`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7LY`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:381`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7LZ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:384`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7La`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:393`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lb`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:410`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lc`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:413`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Ld`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:422`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Le`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:426`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:429`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:479`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lh`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:486`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Li`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:500`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lj`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:510`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lk`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:537`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lo`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:594`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lt`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:624`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lv`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:654`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7Lz`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:686`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7L4`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:719`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dec5d3KDogvc7L8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:748`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dEe5d3KDogvc65s`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/auth/session/middleware.test.js:36`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dEe5d3KDogvc65t`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/auth/session/middleware.test.js:43`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dEe5d3KDogvc65u`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/auth/session/middleware.test.js:55`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dEe5d3KDogvc65v`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/auth/session/middleware.test.js:64`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dEe5d3KDogvc65w`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/auth/session/middleware.test.js:80`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dEe5d3KDogvc65x`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/auth/session/middleware.test.js:116`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64O`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:1296`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64P`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:1309`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64Q`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:1480`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64R`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:1481`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64S`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:1767`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64T`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:1768`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64U`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:1953`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64V`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:1954`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64b`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:2399`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64o`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3204`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64p`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3219`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64q`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3222`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64r`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3226`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64s`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3241`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64t`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3244`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64u`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3325`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64v`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3337`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64w`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3340`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64x`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3559`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dAN5d3KDogvc64y`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/email-service/email-renderer.test.js:3564`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1c7Y5d3KDogvc62b`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/koenig/node-renderers/button-renderer.test.js:8`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1c865d3KDogvc620`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/koenig/node-renderers/call-to-action-renderer.test.js:13`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1c865d3KDogvc621`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/koenig/node-renderers/call-to-action-renderer.test.js:18`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7Bx`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:10`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7By`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:31`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7Bz`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:39`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B0`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:41`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B1`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:42`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B2`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:44`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B3`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:47`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B4`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:50`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B5`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:55`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B6`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:58`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B7`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:63`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:66`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B9`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:71`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B-`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:74`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7B_`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:79`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIz5d3KDogvc7CA`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/lib/email-content-generator.test.js:82`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dL_5d3KDogvc7Cp`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mail/ghost-mailer.test.js:179`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dL_5d3KDogvc7Cq`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mail/ghost-mailer.test.js:192`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dL_5d3KDogvc7Cr`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mail/ghost-mailer.test.js:205`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dL_5d3KDogvc7Cs`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mail/ghost-mailer.test.js:221`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dL_5d3KDogvc7Cu`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mail/ghost-mailer.test.js:311`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dVb5d3KDogvc7Fy`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/media-inliner/test/external-media-inliner.test.js:832`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dD75d3KDogvc65d`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/config.test.js:51`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dD75d3KDogvc65e`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/config.test.js:52`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dD75d3KDogvc65f`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/config.test.js:71`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dD75d3KDogvc65g`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/config.test.js:78`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dD75d3KDogvc65h`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/config.test.js:84`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dD75d3KDogvc65i`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/config.test.js:85`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dD75d3KDogvc65j`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/config.test.js:88`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dD75d3KDogvc65k`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/config.test.js:93`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dDU5d3KDogvc65Y`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/members-api/controllers/router-controller.test.js:1304`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7EP`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:29`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7EQ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:39`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7ER`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:40`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7ES`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:55`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7ET`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:65`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7EU`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:72`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7EV`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:76`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7EW`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:86`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7EX`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:93`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7EY`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:99`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7EZ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:106`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Ea`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:110`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Eb`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:117`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Ec`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:121`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Ed`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:134`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Ee`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:138`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Ef`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:150`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Eg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:154`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Eh`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:168`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Ei`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:183`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dR85d3KDogvc7Ej`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-discovery-service.test.js:187`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dRv5d3KDogvc7EM`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-sending-service.test.js:360`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dRv5d3KDogvc7EN`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-sending-service.test.js:402`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dRv5d3KDogvc7EO`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/mentions/mention-sending-service.test.js:529`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dQ65d3KDogvc7EB`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:394`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dQ65d3KDogvc7EF`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:435`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dVM5d3KDogvc7Fr`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/post-scheduling/post-scheduler-service.test.js:37`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dVM5d3KDogvc7Fp`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/post-scheduling/post-scheduler-service.test.js:41`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dVM5d3KDogvc7Fq`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/post-scheduling/post-scheduler-service.test.js:45`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dVM5d3KDogvc7Ft`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/post-scheduling/post-scheduler-service.test.js:51`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dVM5d3KDogvc7Fu`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/post-scheduling/post-scheduler-service.test.js:77`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dTM5d3KDogvc7FD`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/posts/posts-service.test.js:204`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dTM5d3KDogvc7FE`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/posts/posts-service.test.js:205`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dNp5d3KDogvc7DG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/settings-helpers/settings-helpers.test.js:48`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dNp5d3KDogvc7DH`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/settings-helpers/settings-helpers.test.js:49`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dNp5d3KDogvc7DI`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/settings-helpers/settings-helpers.test.js:118`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dNp5d3KDogvc7DK`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/settings-helpers/settings-helpers.test.js:134`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dNp5d3KDogvc7DL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/settings-helpers/settings-helpers.test.js:159`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dPF5d3KDogvc7DS`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/slack.test.js:128`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dPF5d3KDogvc7DT`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/slack.test.js:130`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dPF5d3KDogvc7DU`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/slack.test.js:145`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dPF5d3KDogvc7DV`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/slack.test.js:162`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dPF5d3KDogvc7DW`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/slack.test.js:165`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dPF5d3KDogvc7DX`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/slack.test.js:190`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIL5d3KDogvc67C`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/stripe/config.test.js:35`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIL5d3KDogvc67D`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/stripe/config.test.js:36`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIL5d3KDogvc67E`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/stripe/config.test.js:48`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIL5d3KDogvc67F`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/stripe/config.test.js:60`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dIL5d3KDogvc67G`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/stripe/config.test.js:69`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWw5d3KDogvc7GL`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/api/middleware/cors.test.js:85`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWw5d3KDogvc7GM`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/api/middleware/cors.test.js:100`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWw5d3KDogvc7GN`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/api/middleware/cors.test.js:117`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dXQ5d3KDogvc7Gf`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/members/middleware/cors.test.js:54`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dXQ5d3KDogvc7Gg`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/members/middleware/cors.test.js:73`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dXQ5d3KDogvc7Gh`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/members/middleware/cors.test.js:92`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7F6`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:94`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7F7`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:111`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7F8`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:128`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7F9`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:152`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7F-`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:173`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7F_`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:194`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7GA`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:223`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7GB`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:238`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7GC`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:253`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7GD`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:300`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7GE`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:314`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7GF`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:328`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7GG`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:330`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7GH`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:346`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dWK5d3KDogvc7GI`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/web/shared/middleware/url-redirects.test.js:348`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dtX5d3KDogvc7Su`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/shared/config/helpers.test.js:6`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dvh5d3KDogvc7TQ`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/utils/fixtures/data-generator.js:50`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1duu5d3KDogvc7TH`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/utils/fixtures/filter-param/index.js:19`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1duu5d3KDogvc7TI`
- Rule: `javascript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/utils/fixtures/filter-param/index.js:27`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1g_G5d3KDogvc8b7`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-design-system/test/unit/utils/format-url.test.ts:67`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1g_G5d3KDogvc8b8`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-design-system/test/unit/utils/format-url.test.ts:68`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1g_G5d3KDogvc8b9`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-design-system/test/unit/utils/format-url.test.ts:68`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1gZm5d3KDogvc8SE`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-settings/test/acceptance/general/social-accounts.test.ts:96`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1gZm5d3KDogvc8SF`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-settings/test/acceptance/general/social-accounts.test.ts:111`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1gZm5d3KDogvc8SG`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-settings/test/acceptance/general/social-accounts.test.ts:132`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1gZZ5d3KDogvc8SC`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-settings/test/acceptance/general/users/profile.test.ts:111`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1gZZ5d3KDogvc8SD`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-settings/test/acceptance/general/users/profile.test.ts:112`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1f8b5d3KDogvc8KJ`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/shade/test/unit/utils/format-url.test.ts:66`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1f8b5d3KDogvc8KK`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/shade/test/unit/utils/format-url.test.ts:67`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1f8b5d3KDogvc8KL`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/shade/test/unit/utils/format-url.test.ts:67`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1hOz5d3KDogvc8h3`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/signup-form/test/e2e/attribution.test.ts:66`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1hOz5d3KDogvc8h4`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/signup-form/test/e2e/attribution.test.ts:81`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dLx5d3KDogvc7Cj`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/activitypub/activity-pub-service.test.ts:83`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dLx5d3KDogvc7Ck`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/activitypub/activity-pub-service.test.ts:129`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dLx5d3KDogvc7Cl`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/activitypub/activity-pub-service.test.ts:188`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dLx5d3KDogvc7Cm`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/activitypub/activity-pub-service.test.ts:255`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dLx5d3KDogvc7Cn`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/activitypub/activity-pub-service.test.ts:287`
- Security category: `encrypt-data`

### Using http protocol is insecure. Use https instead.

- Key: `AZ3Z1dLx5d3KDogvc7Co`
- Rule: `typescript:S5332`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/activitypub/activity-pub-service.test.ts:316`
- Security category: `encrypt-data`

### Make sure that enabling CORS is safe here.

- Key: `AZ3Z1hmb5d3KDogvc8zo`
- Rule: `typescript:S5122`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-framework/test/unit/hooks/use-koenig-file-upload.test.ts:51`
- Security category: `insecure-conf`

### Make sure that enabling CORS is safe here.

- Key: `AZ3Z1hmb5d3KDogvc8zp`
- Rule: `typescript:S5122`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/admin-x-framework/test/unit/hooks/use-koenig-file-upload.test.ts:62`
- Security category: `insecure-conf`

### Avoid expanding secrets in a run block.

- Key: `AZ3Z1h9e5d3KDogvc862`
- Rule: `githubactions:S7636`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `.github/workflows/ci.yml:80`
- Security category: `others`

### Avoid expanding secrets in a run block.

- Key: `AZ3Z1h9e5d3KDogvc865`
- Rule: `githubactions:S7636`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `.github/workflows/ci.yml:1885`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1cel5d3KDogvc6ws`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/frontend/meta/asset-url.js:24`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1cZf5d3KDogvc6vq`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/frontend/services/rss/cache.js:7`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1cQh5d3KDogvc6ts`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/frontend/web/routers/serve-favicon.js:14`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1cPy5d3KDogvc6to`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/frontend/web/routers/serve-public-file.js:92`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1cIt5d3KDogvc6sM`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/lib/image/gravatar.js:21`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1bXJ5d3KDogvc6aB`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/services/route-settings/route-settings.js:154`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1b8h5d3KDogvc6qS`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/services/update-check/update-check-service.js:130`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1cER5d3KDogvc6rt`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/web/admin/controller.js:41`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1dZB5d3KDogvc7HP`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/data/schema/integrity.test.js:61`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1dZB5d3KDogvc7HQ`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/data/schema/integrity.test.js:62`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1dZB5d3KDogvc7HR`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/data/schema/integrity.test.js:63`
- Security category: `others`

### Make sure this weak hash algorithm is not used in a sensitive context here.

- Key: `AZ3Z1dZB5d3KDogvc7HS`
- Rule: `javascript:S4790`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/data/schema/integrity.test.js:64`
- Security category: `others`

### Make sure using a hardcoded IP address ::0 is safe here.

- Key: `AZ3Z1cJr5d3KDogvc6ss`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/core/server/lib/request-external.js:132`
- Security category: `others`

### Make sure using a hardcoded IP address 10.0.0.1 is safe here.

- Key: `AZ3Z1d8z5d3KDogvc7eO`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/email-preview-rate-limiter.test.js:74`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7bu`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:200`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.0.1 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7bx`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:612`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.0.1 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7by`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:613`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7bz`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:615`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.0.1 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7b1`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:645`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7b2`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:647`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7b4`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:679`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.0.1 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7b5`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:710`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7b6`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:712`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.0.1 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7b_`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:742`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7cB`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:744`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.0.1 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7cH`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:779`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1d1U5d3KDogvc7cI`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/e2e-api/admin/oembed.test.js:781`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1eJJ5d3KDogvc7hm`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/integration/services/webhook-request.test.js:36`
- Security category: `others`

### Make sure using a hardcoded IP address 10.0.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kh`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:17`
- Security category: `others`

### Make sure using a hardcoded IP address 10.255.255.255 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Ki`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:18`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kj`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:22`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.255.255 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kk`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:23`
- Security category: `others`

### Make sure using a hardcoded IP address 172.16.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kl`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:27`
- Security category: `others`

### Make sure using a hardcoded IP address 172.31.255.255 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Km`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:28`
- Security category: `others`

### Make sure using a hardcoded IP address 172.15.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kn`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:32`
- Security category: `others`

### Make sure using a hardcoded IP address 172.32.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Ko`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:33`
- Security category: `others`

### Make sure using a hardcoded IP address 169.254.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kp`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:42`
- Security category: `others`

### Make sure using a hardcoded IP address 169.254.169.254 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kq`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:43`
- Security category: `others`

### Make sure using a hardcoded IP address 100.64.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kr`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:52`
- Security category: `others`

### Make sure using a hardcoded IP address 100.127.255.255 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Ks`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:53`
- Security category: `others`

### Make sure using a hardcoded IP address 100.63.255.255 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kt`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:54`
- Security category: `others`

### Make sure using a hardcoded IP address 100.128.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Ku`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:55`
- Security category: `others`

### Make sure using a hardcoded IP address 198.18.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kv`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:59`
- Security category: `others`

### Make sure using a hardcoded IP address 198.19.255.255 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kw`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:60`
- Security category: `others`

### Make sure using a hardcoded IP address 198.17.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kx`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:61`
- Security category: `others`

### Make sure using a hardcoded IP address 198.20.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Ky`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:62`
- Security category: `others`

### Make sure using a hardcoded IP address 240.0.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Kz`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:66`
- Security category: `others`

### Make sure using a hardcoded IP address 8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K0`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:71`
- Security category: `others`

### Make sure using a hardcoded IP address 1.1.1.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K1`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:72`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K2`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:73`
- Security category: `others`

### Make sure using a hardcoded IP address 0xa.0x0.0.01 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K3`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:106`
- Security category: `others`

### Make sure using a hardcoded IP address fc00::1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K4`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:136`
- Security category: `others`

### Make sure using a hardcoded IP address fd12:3456:789a::1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K5`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:137`
- Security category: `others`

### Make sure using a hardcoded IP address 0000:0000:0000:0000:0000:0000:0000:0001 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K6`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:142`
- Security category: `others`

### Make sure using a hardcoded IP address 0000:0000:0000:0000:0000:0000:0000:0000 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K7`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:147`
- Security category: `others`

### Make sure using a hardcoded IP address fe80::1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K8`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:151`
- Security category: `others`

### Make sure using a hardcoded IP address fe9f::1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K9`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:152`
- Security category: `others`

### Make sure using a hardcoded IP address feaf::1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K-`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:153`
- Security category: `others`

### Make sure using a hardcoded IP address febf::1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7K_`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:154`
- Security category: `others`

### Make sure using a hardcoded IP address ::ffff:127.0.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LA`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:158`
- Security category: `others`

### Make sure using a hardcoded IP address ::ffff:10.0.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LB`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:159`
- Security category: `others`

### Make sure using a hardcoded IP address ::ffff:192.168.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LC`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:160`
- Security category: `others`

### Make sure using a hardcoded IP address ::ffff:7f00:1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LD`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:164`
- Security category: `others`

### Make sure using a hardcoded IP address ::ffff:a00:1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LE`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:165`
- Security category: `others`

### Make sure using a hardcoded IP address ::ffff:c0a8:1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LF`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:166`
- Security category: `others`

### Make sure using a hardcoded IP address ::ffff:a9fe:1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LG`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:167`
- Security category: `others`

### Make sure using a hardcoded IP address 0:0:0:0:0:ffff:127.0.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LH`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:171`
- Security category: `others`

### Make sure using a hardcoded IP address 0:0:0:0:0:ffff:10.0.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LI`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:172`
- Security category: `others`

### Make sure using a hardcoded IP address 0:0:0:0:0:ffff:192.168.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LJ`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:173`
- Security category: `others`

### Make sure using a hardcoded IP address 0:0:0:0:0:ffff:169.254.169.254 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LK`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:174`
- Security category: `others`

### Make sure using a hardcoded IP address 0000:0000:0000:0000:0000:ffff:127.0.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LL`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:175`
- Security category: `others`

### Make sure using a hardcoded IP address 0:0:0:0:0:ffff:8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LM`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:179`
- Security category: `others`

### Make sure using a hardcoded IP address 0000:0000:0000:0000:0000:ffff:8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LN`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:180`
- Security category: `others`

### Make sure using a hardcoded IP address ::ffff:8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LO`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:184`
- Security category: `others`

### Make sure using a hardcoded IP address ::ffff:808:808 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LP`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:188`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.0.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7LQ`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:212`
- Security category: `others`

### Make sure using a hardcoded IP address 8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Lm`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:588`
- Security category: `others`

### Make sure using a hardcoded IP address 8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Ln`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:590`
- Security category: `others`

### Make sure using a hardcoded IP address 8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Lp`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:604`
- Security category: `others`

### Make sure using a hardcoded IP address 169.254.169.254 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Lr`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:618`
- Security category: `others`

### Make sure using a hardcoded IP address 169.254.169.254 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Ls`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:620`
- Security category: `others`

### Make sure using a hardcoded IP address 8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Lx`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:678`
- Security category: `others`

### Make sure using a hardcoded IP address 8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7Ly`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:682`
- Security category: `others`

### Make sure using a hardcoded IP address 8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7L1`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:711`
- Security category: `others`

### Make sure using a hardcoded IP address 1.1.1.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7L2`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:712`
- Security category: `others`

### Make sure using a hardcoded IP address 8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7L3`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:715`
- Security category: `others`

### Make sure using a hardcoded IP address 8.8.8.8 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7L5`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:730`
- Security category: `others`

### Make sure using a hardcoded IP address 1.1.1.1 is safe here.

- Key: `AZ3Z1dec5d3KDogvc7L6`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/lib/request-external.test.js:731`
- Security category: `others`

### Make sure using a hardcoded IP address 192.168.0.1 is safe here.

- Key: `AZ3Z1dVb5d3KDogvc7Fz`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/media-inliner/test/external-media-inliner.test.js:1145`
- Security category: `others`

### Make sure using a hardcoded IP address 188.39.113.90 is safe here.

- Key: `AZ3Z1dBs5d3KDogvc65E`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/members-api/services/geolocation-service.test.js:16`
- Security category: `others`

### Make sure using a hardcoded IP address 188.39.113.90 is safe here.

- Key: `AZ3Z1dBs5d3KDogvc65F`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/members-api/services/geolocation-service.test.js:44`
- Security category: `others`

### Make sure using a hardcoded IP address 2a01:4c8:43a:13c9:8d6:128e:1fd5:6aad is safe here.

- Key: `AZ3Z1dBs5d3KDogvc65G`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/members/members-api/services/geolocation-service.test.js:56`
- Security category: `others`

### Make sure using a hardcoded IP address 169.254.169.254 is safe here.

- Key: `AZ3Z1dQ65d3KDogvc7EC`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:399`
- Security category: `others`

### Make sure using a hardcoded IP address 123.123.123.123 is safe here.

- Key: `AZ3Z1dzt5d3KDogvc7bQ`
- Rule: `javascript:S1313`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/utils/e2e-framework-mock-manager.js:50`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dYN5d3KDogvc7Gv`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/data/importer/importers/content-file-importer.test.js:90`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dYN5d3KDogvc7Gw`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/data/importer/importers/content-file-importer.test.js:116`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dYc5d3KDogvc7Gy`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/data/importer/index.test.js:184`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dYc5d3KDogvc7Gz`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/data/importer/index.test.js:195`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dYc5d3KDogvc7G0`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/data/importer/index.test.js:196`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7D5`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:267`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7D6`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:273`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7D7`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:303`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7D8`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:309`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7D9`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:338`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7D-`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:345`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7D_`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:366`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7EA`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:373`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7ED`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:421`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dQ65d3KDogvc7EE`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/oembed/oembed-service.test.js:427`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1c-Y5d3KDogvc63N`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/url/local-file-cache.test.js:15`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1c-Y5d3KDogvc63O`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/url/local-file-cache.test.js:32`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1c-Y5d3KDogvc63P`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/url/local-file-cache.test.js:41`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1c-Y5d3KDogvc63Q`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/url/local-file-cache.test.js:59`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1c-Y5d3KDogvc63R`
- Rule: `javascript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/services/url/local-file-cache.test.js:73`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1h1Y5d3KDogvc84k`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `e2e/helpers/environment/service-managers/mysql-manager.ts:110`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1h1Y5d3KDogvc84l`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `e2e/helpers/environment/service-managers/mysql-manager.ts:118`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1h1Y5d3KDogvc84m`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `e2e/helpers/environment/service-managers/mysql-manager.ts:131`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Ih`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:114`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Ii`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:133`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Ij`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:402`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Ik`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:416`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Il`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:435`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7In`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:511`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Io`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:551`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Ip`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:599`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Iq`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:634`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Is`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:674`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Iv`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:716`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Ix`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:741`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Iy`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:779`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7Iz`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:801`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7I0`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:842`
- Security category: `others`

### Make sure publicly writable directories are used safely here.

- Key: `AZ3Z1dbr5d3KDogvc7I1`
- Rule: `typescript:S5443`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/test/unit/server/adapters/storage/s3-storage.test.ts:890`
- Security category: `others`

### Make sure the "PATH" variable only contains fixed, unwriteable directories.

- Key: `AZ3Z1h8b5d3KDogvc86K`
- Rule: `javascript:S4036`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `docker/watch-admin-apps.js:44`
- Security category: `others`

### Make sure the "PATH" variable only contains fixed, unwriteable directories.

- Key: `AZ3Z1h8b5d3KDogvc86L`
- Rule: `javascript:S4036`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `docker/watch-admin-apps.js:141`
- Security category: `others`

### Make sure the "PATH" variable only contains fixed, unwriteable directories.

- Key: `AZ3Z1h7q5d3KDogvc855`
- Rule: `javascript:S4036`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `e2e/scripts/sync-tinybird-state.mjs:51`
- Security category: `others`

### Make sure the "PATH" variable only contains fixed, unwriteable directories.

- Key: `AZ3Z1h7q5d3KDogvc856`
- Rule: `javascript:S4036`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `e2e/scripts/sync-tinybird-state.mjs:59`
- Security category: `others`

### Make sure the "PATH" variable only contains fixed, unwriteable directories.

- Key: `AZ3Z1eN05d3KDogvc7jB`
- Rule: `javascript:S4036`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/scripts/pack.js:37`
- Security category: `others`

### Make sure the "PATH" variable only contains fixed, unwriteable directories.

- Key: `AZ3Z1eN05d3KDogvc7jD`
- Rule: `javascript:S4036`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/scripts/pack.js:88`
- Security category: `others`

### Make sure the "PATH" variable only contains fixed, unwriteable directories.

- Key: `AZ3Z1eN05d3KDogvc7jE`
- Rule: `javascript:S4036`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `ghost/core/scripts/pack.js:167`
- Security category: `others`

### Make sure not using "noopener" is safe here.

- Key: `AZ3Z1hQ75d3KDogvc8k3`
- Rule: `javascript:S5148`
- Status: `TO_REVIEW`
- Vulnerability probability: `LOW`
- Location: `apps/portal/src/components/common/powered-by.js:14`
- Security category: `others`
