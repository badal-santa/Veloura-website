import type { ReactNode } from "react";

import { site } from "@/lib/site";

/** Shared layout for the privacy policy and terms: title, "last updated" line, summary box, body. */
export function LegalPage({ title, updated, summary, children }: { title: string; updated: string; summary: ReactNode; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 leading-relaxed text-muted [&_a]:text-pink-light [&_a]:underline [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text [&_li]:mt-2 [&_p+p]:mt-3 [&_strong]:text-text [&_ul]:list-disc [&_ul]:pl-5">
      <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm">
        Last updated: {updated} · Applies to {site.name} for Android ({site.packageName})
      </p>
      <div className="mt-8 rounded-2xl border border-pink/40 bg-gradient-to-br from-pink/15 to-violet/10 p-6">
        <p>{summary}</p>
      </div>
      {children}
    </article>
  );
}

export function LegalTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface text-text">
          <tr>
            {head.map((cell) => (
              <th key={cell} className="px-4 py-3 font-semibold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-line align-top">
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
