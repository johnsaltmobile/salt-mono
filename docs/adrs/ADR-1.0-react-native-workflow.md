# ADR 1.0 "React Native Workflow"

|Status|
|------|
| _draft_|

## Overview

Choose either React Native CLI or Expo for both the demo-app and salt-mobile app. 





ADR Overview
The following summary defines the Architecture Decision Record (ADR) as a structured document utilized to capture significant architectural choices along with their context and consequences.

An ADR serves as a vital historical record for any complex engineering project, sir.

Contextual Grounding: It details the specific circumstances and constraints that necessitated a decision at a particular point in time.

Decision Rationale: It explicitly states the chosen path, ensuring that the "why" behind a technical direction is never lost to organizational turnover.

Consequence Mapping: Each record outlines the resulting trade-offs, including both the advantages gained and the technical debt or limitations incurred.

Status Tracking: ADRs move through a lifecycle (e.g., Proposed, Accepted, Superceded), providing a clear narrative of the project's evolution.

Collaboration Tool: They serve as a focal point for peer review, ensuring that senior stakeholders are aligned before implementation begins.


---

THE WORKFLOW ARGUMENT
RESPONSE #1
The following points outline why the Expo framework remains the superior architectural choice for modern mobile development in 2026.

Continuous Native Generation (CNG): Automating the creation of the ios and android directories via npx expo prebuild ensures your native code remains a predictable artifact rather than a source of technical debt.

Expo Router Integration: This provides a file-based routing system that unifies web and native navigation patterns while utilizing native platform APIs for performance.

Curated SDK Ecosystem: Every library within the Expo SDK is rigorously tested for compatibility, effectively eliminating "dependency hell" during upgrades.

Advanced Module API: The Expo Modules API offers a modern, Swift/Kotlin-first approach to writing native code, which is more ergonomic than legacy CLI methods.

Live Activities and Widgets: The recently matured @expo/widgets package allows for the seamless implementation of iOS Live Activities using familiar React patterns.

Unified Development Workflow: Features like "Development Builds" provide the flexibility of custom native code while retaining the rapid iteration of Expo Go.

Infrastructure as Code: Utilizing Config Plugins allows all native configurations to be defined in TypeScript, ensuring your build environment is version-controlled.

First-Class Web Parity: Expo’s commitment to "Universal React" ensures that the same codebase can target mobile and web with minimal platform-specific branching.

Simplified Upgrade Cycles: The npx expo install --fix command automates the task of aligning package versions, a major pain point in bare CLI projects.

Industry Standard Recommendation: As of 2026, the official React Native documentation and major industry players recommend Expo as the default for production.


RESPONSE #2
The following arguments demonstrate why the React Native CLI remains the essential choice for engineers requiring absolute transparency and control over their mobile architecture.

Architectural Transparency: Direct ownership of the ios and android directories eliminates the "black box" of CNG, ensuring every line of native code is explicit and auditable.

Minimal Binary Footprint: By avoiding the overhead of the Expo SDK, CLI-based projects can achieve smaller bundle sizes, critical for performance-sensitive applications.

Zero-Day Native Parity: You are never at the mercy of an SDK alignment cycle; new iOS or Android features can be implemented directly without waiting for a framework update.

Granular Dependency Control: In a CLI project, you ship only the code you explicitly include, avoiding the "framework tax" of carrying unused native modules.

Direct Build Lifecycle Management: Manual control over Podfiles and Gradle scripts allows for highly specialized build configurations often restricted by Config Plugins.

Superior Brownfield Integration: For existing native applications, the CLI is the only viable path where React Native must coexist as a guest within a legacy codebase.

No Abstraction Overhead: While Config Plugins attempt to simplify native changes, editing the native files directly is often faster and more reliable for experienced engineers.

Elimination of Vendor Lock-in: Relying on Expo’s proprietary abstractions creates a dependency on their specific tooling; the CLI uses standard industry tools.

Simplified CI/CD Flexibility: Without Expo-specific CLI wrappers, your project can more easily integrate into bespoke or high-security internal build pipelines.

Pure Platform Ownership: Owning the native code ensures that long-term maintenance is not tied to a third-party framework, providing a stable foundation for the future, sir.