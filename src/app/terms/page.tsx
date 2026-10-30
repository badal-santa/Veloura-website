import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms for using ${site.name}.`,
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated={site.termsUpdated}
      summary={
        <>
          <strong>The short version.</strong> {site.name} is free to use and supported by ads. Your
          photos and videos stay yours and stay on your phone. Please use the app lawfully and only
          edit pictures you have the right to edit. The app is provided as it is, without
          guarantees.
        </>
      }
    >
      <h2>1. Accepting these terms</h2>
      <p>
        By downloading or using {site.name} (&quot;the app&quot;), you agree to these Terms &amp;
        Conditions and to our <Link href="/privacy-policy">Privacy Policy</Link>. If you do not
        agree, please do not use the app.
      </p>

      <h2>2. Who can use the app</h2>
      <p>
        You must be at least 13 years old to use {site.name}. If you are under the age of majority
        where you live, you may use the app only with the permission of a parent or guardian.
      </p>

      <h2>3. Your licence to use the app</h2>
      <p>
        We give you a personal, free, non-exclusive, non-transferable licence to install and use{" "}
        {site.name} on Android devices you own or control, for your own non-commercial use. You may
        not copy, modify, resell, reverse-engineer or redistribute the app, except where the law
        allows it.
      </p>

      <h2>4. Your photos and content</h2>
      <ul>
        <li>
          <strong>You own your content.</strong> Photos, videos and edits you make with {site.name}{" "}
          belong to you. We claim no rights to them.
        </li>
        <li>
          Your content is processed on your device and is not uploaded to us. You are responsible
          for keeping your own copies — uninstalling the app or losing your phone can remove items
          that exist only in the app.
        </li>
        <li>
          Only edit and share pictures you have the right to use. Don&apos;t use {site.name} to edit
          other people&apos;s photos without their permission.
        </li>
      </ul>

      <h2>5. Acceptable use</h2>
      <p>You agree not to use {site.name} to:</p>
      <ul>
        <li>create or share content that is illegal, harassing, hateful or sexually exploitative;</li>
        <li>impersonate someone, or mislead people with altered images in a harmful way;</li>
        <li>infringe anyone&apos;s copyright, trademark, privacy or other rights;</li>
        <li>interfere with the app, its ads, or any service it connects to.</li>
      </ul>

      <h2>6. Templates, stickers and effects</h2>
      <p>
        Templates, sample photos, stickers, filters and other content built into {site.name} are
        provided for you to use in your own creations. You may not extract them from the app and
        sell or distribute them on their own.
      </p>

      <h2>7. Veloura Home</h2>
      <p>
        Veloura Home is an optional Home screen. You choose whether to turn it on, and you can switch
        back to another Home app at any time in the app or in Android settings. Uninstalling another
        app from Veloura Home always goes through Android&apos;s own confirmation, and you are
        responsible for the apps you choose to remove.
      </p>

      <h2>8. Ads and third-party services</h2>
      <p>
        {site.name} is free and shows ads delivered by Google. Ads, and any products or websites
        they lead to, come from third parties; we are not responsible for them. The app also uses
        Google services such as Firebase, which have their own terms. See our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for what data these services receive.
      </p>

      <h2>9. Updates and availability</h2>
      <p>
        We may update, change or stop offering features, or the app as a whole, at any time. Some
        features need a recent version of Android or specific hardware and may not work on every
        device.
      </p>

      <h2>10. Our rights</h2>
      <p>
        The app, its name, logo, design and code belong to us and our licensors. These terms do not
        give you any rights to them other than the licence in section 3.
      </p>

      <h2>11. No warranty</h2>
      <p>
        {site.name} is provided &quot;as is&quot; and &quot;as available&quot;. To the extent the law
        allows, we make no promises that the app will be error-free, uninterrupted, or that its
        results (such as face detection, makeup placement or background removal) will be accurate
        for every photo.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the extent the law allows, we are not liable for any indirect or consequential loss, or
        for loss of data, photos or content, arising from your use of the app. Nothing in these
        terms limits rights you have under consumer law that cannot be excluded.
      </p>

      <h2>13. Ending your use</h2>
      <p>
        You can stop using {site.name} at any time by uninstalling it. We may end your licence if you
        break these terms.
      </p>

      <h2>14. Changes to these terms</h2>
      <p>
        If we change these terms, we will update the date at the top of this page. Continuing to use
        the app after a change means you accept the new terms.
      </p>

      <h2>15. Governing law</h2>
      <p>
        These terms are governed by the laws of {site.governingLaw}, and disputes will be handled by
        the courts there, unless the law where you live says otherwise.
      </p>

      <h2>16. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
