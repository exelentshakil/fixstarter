/**
 * Million-Dollar Demo Cockpit Configuration Hub
 * Central Schema & Data Provider for Light-Speed Customization.
 *
 * TO CUSTOMIZE FOR ANY BID IN 30 SECONDS:
 * Simply update this single file with the client's domain, metrics,
 * sample workflow scenario, and entity table rows.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'fixstarter',
  name: 'FixStarter',
  badge: 'v1.0 Escrow & Philanthropy Engine',
  tagline: 'Multi-Party Managed Escrow & Verified Home Repair Philanthropy',
  description: 'Production-grade crowdfunding, managed escrow, and automated contractor KYC platform for urgent renter home repairs. Built with Stripe Connect, real-time verification, and NIST AI governance.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Escrow Ledger' },
    { id: 'pipeline', label: 'KYC & Verification Engine' },
    { id: 'records', label: 'Active Repairs' },
  ],
  metrics: [
    {
      id: 'throughput',
      title: 'Total Escrow Volume',
      value: '$348,250',
      change: '+24.5% this month',
      trend: 'up',
      subtext: '$32,150 in Active Escrow',
      badge: 'Stripe Connect Active',
    },
    {
      id: 'firewall',
      title: 'Verified Contractors',
      value: '142 Active',
      change: '100% KYC Pass Rate',
      trend: 'up',
      subtext: 'Powered by Stripe Identity',
      badge: 'Verification Guard',
    },
    {
      id: 'inference',
      title: 'Active Home Repairs',
      value: '48 Live Repairs',
      change: 'Avg 4.2 Days to Done',
      trend: 'neutral',
      subtext: 'Escrow Release on Verified Proof',
      badge: '0 Escrow Disputes',
    },
  ],
  workflow: {
    badge: 'Step 1 • Live Interactive Test',
    title: 'Stripe Connect Escrow & Payout Simulator',
    description: 'Simulate contractor completion proof verification and automated Stripe split-payout preparation. Analyzes repair quotes against completion assets to prep contractor and platform splits.',
    inputLabel: 'Renter Details, Contractor Quote, and Proof of Completion Assets',
    inputPlaceholder: 'Enter job details, escrow amount, contractor KYC info, or photo metadata to simulate payout...',
    defaultInput: 'Job ID: JOB-2041, Renter: Maria Gomez, Property: 1402 Oak St, Chicago, IL, Contractor Quote: $1,200.00 for sewer line replacement. Completion Proof Uploaded: 2 high-resolution photos showing new PVC drainage lines, soil backfill, and pressure test manifold reading 15 PSI.',
    buttonLabel: 'Verify Proof & Generate Split Payout',
    sampleResponse: {
      status: 'PROOF_VERIFIED_ESCROW_RELEASE_PENDING',
      job_id: 'JOB-2041',
      audit: {
        repair_type: 'Sewer Line Replacement',
        quote_amount: 1200.0,
        completion_photos_analyzed: 2,
        vision_confidence_score: 0.98,
        work_matches_quote: true,
        structural_integrity_verified: true,
      },
      stripe_connect_payout_blueprint: {
        escrow_balance: 1200.0,
        payouts: [
          {
            account_id: 'acct_1Nre3S4Kj89wB2',
            role: 'Contractor (Verified Express)',
            net_amount: 1080.0,
            transfer_group: 'JOB-2041-ESCROW',
            onboarding_status: 'KYC_COMPLETED',
          },
          {
            account_id: 'acct_platform_fee',
            role: 'FixStarter Platform (10% Landlord Fee)',
            net_amount: 120.0,
            transfer_group: 'JOB-2041-ESCROW',
          },
        ],
        escrow_release_status: 'READY_FOR_ADMIN_SIGN_OFF',
      },
      ai_governance: {
        nist_rmf_status: 'COMPLIANT',
        pii_tokenization: 'Maria Gomez -> [REDACTED_RENTER_A], 1402 Oak St -> [REDACTED_ADDRESS_A]',
      },
    },
  },
  table: {
    badge: 'Real-Time Operational Queue',
    title: 'Multi-Party Escrow Ledger & Job Registry',
    description: 'High-density escrow ledger displaying donor-funded balances, contractor onboarding states, and landlord fee collection queues with full audit details.',
    columns: [
      { key: 'id', label: 'Job ID' },
      { key: 'entityName', label: 'Renter / Property' },
      { key: 'category', label: 'Repair Category' },
      { key: 'status', label: 'Escrow Status' },
      { key: 'latency', label: 'Stripe Status' },
      { key: 'action', label: 'Inspection' },
    ],
    rows: [
      {
        id: 'JOB-2041',
        entityName: 'Maria Gomez',
        category: 'Sewer Line Replacement',
        status: 'queued',
        latency: 'Verification Pending',
        provider: 'Stripe Express (acct_1Nre3)',
        updatedAt: '2 mins ago',
        payload: {
          renter_id: 'RENTER-8821',
          property: '1402 Oak St, Chicago, IL',
          escrow_total: '$1,200.00',
          donations_collected: '$1,200.00',
          contractor: 'Chicago Drainage Solutions',
          contractor_kyc: 'PASS (Express Verified)',
          completion_proof: '2 photos uploaded',
          landlord_fee_status: 'Collected ($120.00 from landlord acct_920x)',
          escrow_payout_hold: 'Hold Active (Ready for Admin release)',
        },
      },
      {
        id: 'JOB-2042',
        entityName: 'James Carter',
        category: 'HVAC Compressor Defect',
        status: 'verified',
        latency: 'Transferred ($2,400)',
        provider: 'Stripe Express (acct_2Y92u)',
        updatedAt: '4 mins ago',
        payload: {
          renter_id: 'RENTER-4410',
          property: '809 Elm St, Houston, TX',
          escrow_total: '$2,400.00',
          donations_collected: '$2,400.00',
          contractor: 'Texan Climate Experts',
          contractor_kyc: 'PASS (Express Verified)',
          completion_proof: 'Video walkthrough verified',
          landlord_fee_status: 'Collected ($240.00 platform fee retained)',
          escrow_payout_hold: 'Released (Payout completed to contractor)',
        },
      },
      {
        id: 'JOB-2043',
        entityName: 'Linda Chen',
        category: 'Roof Leak Mitigation',
        status: 'active',
        latency: 'Escrow Lock Active',
        provider: 'Stripe Express (acct_3K77y)',
        updatedAt: '7 mins ago',
        payload: {
          renter_id: 'RENTER-1294',
          property: '221 Baker Ave, Seattle, WA',
          escrow_total: '$850.00',
          donations_collected: '$850.00',
          contractor: 'Northwest Roofing Corp',
          contractor_kyc: 'PASS (Express Verified)',
          completion_proof: 'Awaiting submission from contractor',
          landlord_fee_status: 'Authorized (Landlord credit card on file)',
          escrow_payout_hold: 'Hold Active (Incomplete work)',
        },
      },
      {
        id: 'JOB-2044',
        entityName: 'Robert Taylor',
        category: 'Electrical Panel Upgrade',
        status: 'verified',
        latency: 'Transferred ($1,500)',
        provider: 'Stripe Express (acct_1H62w)',
        updatedAt: '12 mins ago',
        payload: {
          transaction_batch: 'TX-BATCH-091',
          property: '304 Maple Ave, Atlanta, GA',
          escrow_total: '$1,500.00',
          donations_collected: '$1,500.00',
          contractor: 'Taylor Electric Partners',
          contractor_kyc: 'PASS (Express Verified)',
          completion_proof: 'Permit & inspection sign-off photos verified',
          landlord_fee_status: 'Collected ($150.00 platform fee)',
          escrow_payout_hold: 'Released (Payout completed)',
        },
      },
      {
        id: 'JOB-2045',
        entityName: 'Sarah Jenkins',
        category: 'Lead Paint Abatement',
        status: 'flagged',
        latency: 'Payout Suspended',
        provider: 'Stripe Express (acct_4Q23a)',
        updatedAt: '15 mins ago',
        payload: {
          incident_id: 'SEC-0041',
          property: '712 Pine Dr, Boston, MA',
          escrow_total: '$3,100.00',
          donations_collected: '$3,100.00',
          contractor: 'Jenkins Remediation Services',
          contractor_kyc: 'PASS (Express Verified)',
          completion_proof: 'Photos uploaded (Partial coverage)',
          landlord_fee_status: 'Disputed (Landlord claims lead abatement failed local clearance test)',
          escrow_payout_hold: 'Frozen (Admin dispute mediation in progress)',
        },
      },
    ],
  },
};
