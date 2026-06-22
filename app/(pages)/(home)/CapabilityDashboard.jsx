"use client";

import { useMemo, useState } from "react";

import styles from "./page.module.css";

export function CapabilityDashboard({ label, capabilities }) {
  const [selectedId, setSelectedId] = useState(capabilities[0]?.id);

  const selectedCapability = useMemo(
    () => capabilities.find((capability) => capability.id === selectedId) || capabilities[0],
    [capabilities, selectedId],
  );

  if (!selectedCapability) {
    return null;
  }

  return (
    <section className={styles.dashboard} aria-label={label}>
      <div className={styles.switcher} role="tablist" aria-label={label}>
        {capabilities.map((capability) => {
          const isSelected = capability.id === selectedCapability.id;

          return (
            <button
              key={capability.id}
              className={styles.switcherButton}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls="capability-status-panel"
              id={`capability-tab-${capability.id}`}
              data-active={isSelected ? "true" : undefined}
              onClick={() => setSelectedId(capability.id)}
            >
              <span>{capability.label}</span>
              <span className={styles.switcherStatus}>{capability.status}</span>
            </button>
          );
        })}
      </div>

      <div
        className={styles.statusPanel}
        id="capability-status-panel"
        role="tabpanel"
        aria-labelledby={`capability-tab-${selectedCapability.id}`}
      >
        <div className={styles.statusHeader}>
          <span className={styles.statusLabel} data-tone={selectedCapability.statusTone}>
            {selectedCapability.status}
          </span>
          <span className={styles.statusMetric}>{selectedCapability.metric}</span>
        </div>
        <h2>{selectedCapability.headline}</h2>
        <p>{selectedCapability.description}</p>
        <ul className={styles.detailList} aria-label={`${selectedCapability.label} details`}>
          {selectedCapability.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
