---
title: "Privacy Policy for Universal Scanner"
app: "universal-scanner"
appName: "Universal Scanner"
type: "privacy"
lastUpdated: "2025-12-21"
supportEmail: "cranbear.service@gmail.com"
---

# Privacy Policy for Universal Scanner 

**Effective Date:** 21st December 2025

## 1. Introduction 

**Universal Scanner** ("we," "our," or "us") operates the Universal Scanner mobile application (the "App"). We are committed to protecting your privacy and providing you with a clear, granular understanding of how your data is handled. This policy explains **exactly** what data we collect, why we collect it, how it is stored, and your rights.

By using the App, you agree to the collection and use of information in accordance with this policy.

## 2. Data We Collect & Specific Permissions 

### 2.1 Device Permissions (Hardware Access) 

To function as a barcode and QR code scanner, the App requires specific hardware permissions.

* **Camera Permission:**

  * **Purpose:** To scan 1D and 2D barcodes in real-time. We use **advanced on-device machine learning** to process the scanned barcodes locally. The image data **never leaves your device** and is not transmitted to any server.
  * **Granularity:** We access the camera video stream strictly for the duration of the "Scan" mode. The video frames are processed **locally** on your device's processor using state-of-the-art embedded computer vision algorithms.
  * **Privacy:** We **do not** record, save, store, or transmit the video feed or images to any external server. The video stream is discarded immediately after **processing locally**.

* **Photo Library Access (Optional):**

  * **Purpose:** To allow you to scan a barcode from a static image saved in your gallery.
  * **Granularity:** We only access the **specific single image** you manually select via the system picker. We do not scan, index, or upload your entire photo library.

* **Flashlight/Torch:**

  * **Purpose:** To illuminate barcodes in low-light environments.
  * **Granularity:** Controlled manually by the user via the UI toggle.

### 2.2 Usage Data & Analytics (Anonymous) 

We collect completely **anonymous**, aggregated telemetry data to improve app stability and user experience. We use **PostHog** for this purpose.

**Specific Data Points Collected:**

* **Device Attributes:**

  * Device Model (e.g., iPhone 13, Pixel 6)
  * Operating System Version (e.g., iOS 17.2, Android 14)
  * App Version (e.g., v1.2.0)
  * Screen Resolution and Density

* **Usage Interaction:**

  * **Screen Views:** Which screens are visited (e.g., "SettingsScreen", "HistoryScreen").
  * **Feature Actions:** Interactions such as "Scan Completed", "Flashlight Toggled", "Batch Mode Enabled", "Export to PDF".
  * **Session Metrics:** Duration of app usage and frequency of sessions.

* **Diagnostics:**

  * **Crash Logs:** Stack traces generated if the app crashes (helps us identify and fix bugs).
  * **Performance:** App startup time and scan processing speed (aggregated).

**What We DO NOT Collect:**

* **No Personal Identity:** We do not collect your name, email address, phone number, or physical address.
* **No Scan Content:** We do not collecting the **content** of your scans (e.g., we know a scan happened, but we don't know *what* text or URL was scanned) in our analytics.
* **No Location:** We do not track your precise GPS location.

## 3. How We Use Your Data 

We use the collected data for the following specific purposes:

* **Core Functionality:** To decode barcodes and display the results to you.
* **App Improvement:** To analyze which features are popular and need refinement (e.g., if "Batch Scan" is used often, we might improve its UI).
* **Stability:** To monitor crash rates and fix technical issues promptly.
* **Legal Compliance:** To comply with applicable laws and regulations.

## 4. Third-Party Service Providers 

We use the following trusted third-party service provider. Data shared with them is anonymous and aggregated.

### PostHog Analytics 

* **Purpose:** Product analytics and feature usage tracking.
* **Data Shared:** Anonymous device IDs, event logs (interactions), and technical device details.
* **Processing Location:** Data may be processed in the United States or EU depending on server configuration.
* **Privacy Policy:** [PostHog Privacy Policy](https://posthog.com/privacy)

### International Data Transfers 

Your information, including analytics data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.

By using the App, you consent to this transfer. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.

## 5. Data Retention & Storage 

### Local Data (On Your Device) 

* **Scan History:** All scanned barcodes, generated codes, and associated metadata (timestamps, formats) are stored in a local database **on your device**.
* **Retention:** This data remains on your device until you manually delete specific items or uninstall the App. **We have zero access to this database.**

### Analytics Data (Cloud) 

* **Retention:** Anonymous logs are retained for a limited period (typically 90 days) to allow for trend analysis, after which they are automatically deleted or aggregated.

## 6. Data Security 

We implement robust security measures to protect your data:

* **Local Encryption:** The App uses secure sandbox storage provided by the operating system (iOS/Android) to prevent unauthorized access to your local history.
* **Transmission Security:** All analytics data transmitted to our service providers is encrypted using **TLS/SSL (Transport Layer Security)**.
* **Minimization:** We practice data minimization by only collecting data that is strictly necessary for the App's function.

## 7. Your Rights (GDPR, CCPA, CPRA & Global) 

Regardless of your location, we extend these rights to all users:

* **No Sale of Data (Including Unidentifiable Info):**

  * **Strict Policy:** Since we do not collect personal information, we have no personal information to sell. Furthermore, we **do not sell, trade, or share** your **anonymous or unidentifiable** usage data with third parties for their direct marketing purposes or any other commercial benefit.
  * **Clarification:** Our use of third-party analytics (PostHog) strictly involves service provider relationships where data use is limited to functioning and improving the App on our behalf.

* **Right to Opt-Out (Do Not Sell or Share My Info):**

  * Although we do not sell your data, you retain the right to opt-out of all tracking and analytics processing. You can exercise this right directly:
  * **Do Not Track (DNT) Signals:** We do not track you over time and across third-party websites to provide targeted advertising and therefore do not respond to Do Not Track (DNT) signals.
  * **Action:** Go to **Settings > Privacy > Analytics** and toggle the switch to **OFF**. This will strictly prevent any data transmission to our analytics providers.

* **Right to Access:** You can view your locally stored scan history directly within the "History" tab of the App.

* **Right to Erasure (Deletion):**

  * **Local Data:** You can delete individual scans or clear your entire history in **Settings > Clear All History**.
  * **Analytics:** You can request the deletion of your anonymous analytics profile by contacting us with your installation ID (found in Settings > Diagnostics).

* **Right to Portability:** You can export your scan history data to CSV, PDF, or JSON formats directly from the App.

## 8. External Links 

The App may generate or scan QR codes containing links to third-party websites. If you click on a link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

## 9. Children’s Privacy 

Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.

## 10. Changes to This Privacy Policy 

We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted.

## 11. Contact Us 

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:

**Email:** [cranbear.service@gmail.com](mailto:cranbear.service@gmail.com)

## 12. Version History 

<table>
<tr><th>Version</th><th>Date</th><th>Description</th></tr>
<tr><td>1.0</td><td>2025-12-21</td><td>Initial Privacy Policy release.</td></tr></table>

Pager[Next pageTerms of Usage](/cranbear-public/terms.html)

Released under the Apache License 2.0.

Copyright © 2025 Universal Scanner

    window.__VP_HASH_MAP__=JSON.parse("{\"index.md\":\"B9xwNkjc\",\"privacy.md\":\"-HOiAkVc\",\"terms.md\":\"ClU7e1C6\"}");window.__VP_SITE_DATA__=JSON.parse("{\"lang\":\"en-US\",\"dir\":\"ltr\",\"title\":\"Universal Scanner\",\"description\":\"Privacy Policy and Terms of Usage for Universal Scanner\",\"base\":\"/cranbear-public/\",\"head\":[],\"router\":{\"prefetchLinks\":true},\"appearance\":true,\"themeConfig\":{\"logo\":\"/logo.png\",\"search\":{\"provider\":\"local\"},\"nav\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Privacy\",\"link\":\"/privacy\"},{\"text\":\"Terms\",\"link\":\"/terms\"}],\"sidebar\":[{\"text\":\"Legal\",\"items\":[{\"text\":\"Privacy Policy\",\"link\":\"/privacy\"},{\"text\":\"Terms of Usage\",\"link\":\"/terms\"}]}],\"socialLinks\":[],\"footer\":{\"message\":\"Released under the Apache License 2.0.\",\"copyright\":\"Copyright © 2025 Universal Scanner\"}},\"locales\":{},\"scrollOffset\":134,\"cleanUrls\":false}");
