import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, LegalTable } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles your photos and data.`,
};

const COLLECTED = [
  ["App usage events — screens opened, features used", "To understand which parts of the app people use and to fix problems", "Google Firebase Analytics"],
  ["Crash reports — what the app was doing when it crashed", "To find and fix crashes", "Google Firebase Crashlytics"],
  ["Advertising identifier", "To show ads and measure their performance", "Google"],
  ["Device and app information — model, Android version, app version, language", "Diagnostics and compatibility", "Google Firebase"],
  ["Install source", "To understand where installs come from and decide whether ads are shown", "Google Play Install Referrer"],
];

const PERMISSIONS = [
  ["Camera", "Taking photos with the beauty camera"],
  ["Photos and videos", "Saving your edited photos and videos. Opening a photo uses Android's photo picker, which shares only the photos you choose"],
  ["Internet & network state", "Loading ads and app configuration"],
  ["See your installed apps (Veloura Home only)", "Showing and opening your apps on the Veloura Home screen — the list stays on your phone"],
  ["Request to uninstall apps (Veloura Home only)", "Opening Android's uninstall dialog when you choose Uninstall on an app"],
  ["Expand status bar (Veloura Home only)", "Opening your notifications when you swipe down on Veloura Home"],
  ["Vibrate", "Haptic feedback, which you can switch off in Settings"],
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={site.privacyUpdated}
      summary={
        <>
          <strong>The short version.</strong> Your photos stay on your phone. We never upload, store
          or share your pictures or videos, and there is no account. All editing, including face
          detection for beauty and makeup, happens on your device. We do collect anonymous usage
          data and show ads, both described below.
        </>
      }
    >
      <h2>1. Photos and videos</h2>
      <p>{site.name} needs your photos so it can edit them. That is the only reason it asks for them.</p>
      <ul>
        <li>
          Your photos and videos are <strong>never uploaded</strong> to us or to anyone else.
        </li>
        <li>
          Beauty, makeup, filters, background removal and video trimming run{" "}
          <strong>entirely on your device</strong>.
        </li>
        <li>
          Face detection is used only to place beauty and makeup effects on the photo you are
          editing. It runs on your device, nothing about your face is stored, and nothing is sent
          anywhere.
        </li>
        <li>
          When you open a photo, Android&apos;s photo picker gives {site.name} access only to the
          photos you select.
        </li>
        <li>
          Photos you save are written to your phone&apos;s gallery. &quot;My creations&quot; is a
          list kept on your device.
        </li>
      </ul>

      <h2>2. Information we do collect</h2>
      <LegalTable head={["What", "Why", "Who"]} rows={COLLECTED} />
      <p className="mt-4">
        We do <strong>not</strong> collect your name, email address, phone number, contacts, your
        photos or videos, or the list of apps installed on your device.
      </p>

      <h2>3. Advertising</h2>
      <p>
        {site.name} is free and supported by advertising delivered through Google. Google may use your
        advertising identifier to show ads that are more relevant to you. If you are in the European
        Economic Area or the UK, you are asked for consent before any ads are requested. You can reset
        or delete your advertising identifier at any time in <em>Settings → Google → Ads</em> on your
        device, and opt out of personalised advertising there too.
      </p>
      <p>
        Google&apos;s own handling of this data is described in{" "}
        <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">
          How Google uses information from sites or apps that use our services
        </a>
        .
      </p>

      <h2>4. Permissions and what they are for</h2>
      <LegalTable head={["Permission", "Used for"]} rows={PERMISSIONS} />

      <h2>5. Veloura Home</h2>
      <p>
        Veloura Home is an optional Home screen. To show your apps, it reads the list of apps on your
        phone. That list is used only on your device and is never sent anywhere. Uninstalling an app
        always goes through Android&apos;s own confirmation dialog.
      </p>

      <h2>6. Children</h2>
      <p>
        {site.name} is not directed at children under 13, and we do not knowingly collect personal
        information from them.
      </p>

      <h2>7. Your choices</h2>
      <ul>
        <li>
          <strong>Reset your advertising ID</strong> — in your device settings, as above.
        </li>
        <li>
          <strong>Revoke camera or photo access</strong> — in Android&apos;s app permission settings.
        </li>
        <li>
          <strong>Stop using Veloura Home</strong> — turn it off in the app under Profile, or choose a
          different Home app in Android settings.
        </li>
        <li>
          <strong>Delete everything</strong> — uninstalling the app removes all data it created on
          your device. Photos you saved to your gallery stay there.
        </li>
      </ul>

      <h2>8. Data retention</h2>
      <p>
        Everything the app creates lives on your device and is removed when you uninstall. Analytics
        and crash data held by Google Firebase are retained according to Google&apos;s retention
        settings for the project.
      </p>

      <h2>9. Changes</h2>
      <p>If this policy changes, we will update the date at the top of this page.</p>

      <h2>10. Terms</h2>
      <p>
        Your use of {site.name} is also covered by our <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about this policy, or a request to delete data, can be sent to{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
