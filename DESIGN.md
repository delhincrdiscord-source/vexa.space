# FlaviBot

## Mission
Create implementation-ready, token-driven UI guidance for FlaviBot that is optimized for consistency, accessibility, and fast delivery across dashboard web app.

## Brand
- Product/brand: FlaviBot
- URL: https://flavibot.xyz/
- Audience: authenticated users and operators
- Product surface: dashboard web app

## Style Foundations
- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=Proxima Nova`, `font.family.stack=Proxima Nova, Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif`, `font.size.base=18px`, `font.weight.base=700`, `font.lineHeight.base=28.0001px`
- Typography scale: `font.size.xs=12.8px`, `font.size.sm=13.6px`, `font.size.md=14.4px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=20px`, `font.size.3xl=24px`, `font.size.4xl=36px`
- Color palette: `color.text.primary=#fafafa`, `color.text.secondary=#d1d5db`, `color.text.tertiary=#a1a1aa`, `color.text.inverse=#9ca3af`, `color.surface.base=#000000`, `color.surface.muted=#2c2935`, `color.surface.raised=#1f202b`, `color.surface.strong=#191a23`
- Spacing scale: `space.1=3px`, `space.2=6px`, `space.3=10px`, `space.4=12px`, `space.5=15px`, `space.6=20px`, `space.7=22px`, `space.8=24px`
- Radius/shadow/motion tokens: `radius.xs=4px`, `radius.sm=33554400px` | `motion.duration.instant=100ms`, `motion.duration.fast=200ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (28), buttons (5), lists (4), navigation (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
