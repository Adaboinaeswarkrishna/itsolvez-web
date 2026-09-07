"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, IndianRupee, TrendingUp, Clock, Users } from "lucide-react";

function fmtINR(n: number): string {
  if (!isFinite(n)) return ", ";
  if (Math.abs(n) >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (Math.abs(n) >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export default function RoiCalculator() {
  const [employees, setEmployees] = useState(40);
  const [downtimeHrs, setDowntimeHrs] = useState(6);
  const [hourlyCost, setHourlyCost] = useState(400);
  const [itSpend, setItSpend] = useState(80000);

  // Assumptions (documented below the tool)
  const DOWNTIME_REDUCTION = 0.65; // proactive managed IT typically prevents ~65% of downtime
  const PRODUCTIVITY_GAIN = 0.03;  // ~3% productivity lift from faster support and better tooling
  const MANAGED_IT_PER_USER = 1500; // ₹/user/month midpoint

  const monthlyDowntimeCost = downtimeHrs * employees * hourlyCost;
  const downtimeSavings = monthlyDowntimeCost * DOWNTIME_REDUCTION;
  const productivitySavings = employees * 160 * hourlyCost * PRODUCTIVITY_GAIN;
  const managedItCost = employees * MANAGED_IT_PER_USER;
  const netMonthly = downtimeSavings + productivitySavings + itSpend - managedItCost - itSpend * 0.4;
  const annualImpact = netMonthly * 12;
  const roiPct = managedItCost > 0 ? Math.round((netMonthly / managedItCost) * 100) : 0;

  const inputs = [
    { label: "Number of employees", icon: Users, value: employees, set: setEmployees, min: 5, max: 500, step: 5, unit: "" },
    { label: "IT downtime (hours / month)", icon: Clock, value: downtimeHrs, set: setDowntimeHrs, min: 0, max: 40, step: 1, unit: "hrs" },
    { label: "Avg. cost per employee-hour (₹)", icon: IndianRupee, value: hourlyCost, set: setHourlyCost, min: 100, max: 2000, step: 50, unit: "₹" },
    { label: "Current monthly IT spend (₹)", icon: TrendingUp, value: itSpend, set: setItSpend, min: 0, max: 1000000, step: 10000, unit: "₹" },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-[#E3EAF6] p-7 space-y-6">
        <h2 className="font-display text-lg font-bold text-[#060B24]">Your business today</h2>
        {inputs.map((f) => (
          <div key={f.label}>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-[#39415C] flex items-center gap-2">
                <f.icon size={15} className="text-[#1878F0]" /> {f.label}
              </label>
              <span className="text-sm font-bold text-[#060B24]">
                {f.unit === "₹" ? `₹${f.value.toLocaleString("en-IN")}` : `${f.value} ${f.unit}`}
              </span>
            </div>
            <input
              type="range"
              min={f.min}
              max={f.max}
              step={f.step}
              value={f.value}
              onChange={(e) => f.set(Number(e.target.value))}
              className="w-full accent-[#1878F0]"
              aria-label={f.label}
            />
          </div>
        ))}
        <p className="text-xs text-[#5A6380] leading-relaxed">
          Assumptions: proactive managed IT prevents ~65% of unplanned downtime; ~3% productivity
          lift from faster support; managed IT at ₹1,500/user/month; ~40% of current reactive IT
          spend remains (licences, hardware). Adjust the sliders to your reality.
        </p>
      </div>

      {/* Results */}
      <div className="bg-[#060B24] rounded-2xl p-7 space-y-5">
        <h2 className="font-display text-lg font-bold text-white">Estimated impact with managed IT</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <div className="text-xs text-[#EAF0FA]/50 mb-1">Downtime cost today</div>
            <div className="font-display text-xl font-black text-[#F04830]">{fmtINR(monthlyDowntimeCost)}/mo</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <div className="text-xs text-[#EAF0FA]/50 mb-1">Downtime savings</div>
            <div className="font-display text-xl font-black text-[#10b981]">{fmtINR(downtimeSavings)}/mo</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <div className="text-xs text-[#EAF0FA]/50 mb-1">Productivity gain</div>
            <div className="font-display text-xl font-black text-[#10b981]">{fmtINR(productivitySavings)}/mo</div>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <div className="text-xs text-[#EAF0FA]/50 mb-1">Managed IT cost</div>
            <div className="font-display text-xl font-black text-white">{fmtINR(managedItCost)}/mo</div>
          </div>
        </div>
        <div className="rounded-xl bg-[#1878F0]/15 border border-[#1878F0]/40 p-5">
          <div className="text-xs text-[#8FBFFC] uppercase tracking-widest mb-1.5 font-semibold">Estimated net annual impact</div>
          <div className="font-display text-3xl font-black text-white">{fmtINR(annualImpact)}</div>
          <div className="text-sm text-[#EAF0FA]/60 mt-1">≈ {roiPct}% monthly return on managed IT investment</div>
        </div>
        <p className="text-xs text-[#EAF0FA]/40 leading-relaxed">
          Indicative estimate, not a quote. Real numbers depend on your environment, get exact
          figures from a free assessment.
        </p>
        <Link href="/contact"
          className="inline-flex items-center gap-2 bg-[#1878F0] hover:bg-[#0F5FC7] text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors" prefetch={false}>
          Book a Free Consultation <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
