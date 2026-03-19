'use client';

import ProductSection from './ProductSection';
import EpoxyInsulatorSVG from './svg/EpoxyInsulatorSVG';
import HeatShrinkSVG from './svg/HeatShrinkSVG';
import CircuitBreakerSVG from './svg/CircuitBreakerSVG';
import BusbarSystemSVG from './svg/BusbarSystemSVG';
import NetworkSwitchSVG from './svg/NetworkSwitchSVG';

const products = [
  {
    title: 'Epoxy APG Casting',
    subtitle: 'Phase 1 \u00b7 MV Insulation Systems',
    description:
      'Medium-voltage insulators, bushings, and CT/PT castings for switchgear OEMs. Automated Pressure Gelation with in-house high-voltage testing ensures consistent quality across production runs.',
    specs: ['Up to 36kV', 'APG Process', 'In-house HV Testing', 'BIS/IEC Certified'],
    illustration: <EpoxyInsulatorSVG />,
    steps: [
      { label: 'Resin Mixing' },
      { label: 'Mold Prep' },
      { label: 'Pressure Gelation' },
      { label: 'Curing' },
      { label: 'HV Testing' },
    ],
  },
  {
    title: 'Heat Shrink Tubing',
    subtitle: 'Phase 2 \u00b7 Busbar Insulation',
    description:
      'PVC and polyolefin busbar insulation rated up to 25kV. Continuous extrusion lines deliver consistent wall thickness and dielectric strength for panel builders and industrial OEMs.',
    specs: ['Up to 25kV', 'PVC & Polyolefin', 'Continuous Extrusion', 'Custom Colors'],
    illustration: <HeatShrinkSVG />,
    steps: [
      { label: 'Compounding' },
      { label: 'Extrusion' },
      { label: 'Irradiation' },
      { label: 'Expansion' },
      { label: 'QC' },
    ],
  },
  {
    title: 'VCB Distribution & AMC',
    subtitle: 'Phase 1 \u00b7 Switchgear Solutions',
    description:
      '11kV and 33kV vacuum circuit breaker panels with vacuum interrupters and annual maintenance contracts. Utility-grade reliability for DISCOMs and industrial installations.',
    specs: ['11kV / 33kV', 'Vacuum Interrupters', 'Annual Maintenance', 'Utility Grade'],
    illustration: <CircuitBreakerSVG />,
    steps: [
      { label: 'Panel Design' },
      { label: 'Assembly' },
      { label: 'Vacuum Test' },
      { label: 'HV Withstand' },
      { label: 'Commissioning' },
    ],
  },
  {
    title: 'Busbar Trunking Systems',
    subtitle: 'Phase 3 \u00b7 Power Distribution',
    description:
      'Compact air-insulated busbar trunking for data centers, commercial buildings, and industrial power distribution. Modular design with integrated tap-off units for flexible installations.',
    specs: ['Air Insulated', 'Modular Design', 'Data Centers', 'IP54 Rating'],
    illustration: <BusbarSystemSVG />,
    steps: [
      { label: 'Cu Fabrication' },
      { label: 'Insulation' },
      { label: 'Housing' },
      { label: 'Tap-off' },
      { label: 'Testing' },
    ],
  },
  {
    title: 'IEC 61850 Networking',
    subtitle: 'Phase 3 \u00b7 Digital Substations',
    description:
      'Ruggedized Ethernet switches for digital substations supporting GOOSE and MMS protocols. CEA priority localization item \u2014 currently 100% imported into India.',
    specs: ['GOOSE/MMS', 'Ruggedized', 'Fiber Optic', 'CEA Priority'],
    illustration: <NetworkSwitchSVG />,
    steps: [
      { label: 'PCB Assembly' },
      { label: 'Firmware' },
      { label: 'Protocol Test' },
      { label: 'EMC' },
      { label: 'Certification' },
    ],
  },
];

export default function ProductShowcase() {
  return (
    <>
      {products.map((p, i) => (
        <ProductSection key={p.title} index={i} {...p} />
      ))}
    </>
  );
}
