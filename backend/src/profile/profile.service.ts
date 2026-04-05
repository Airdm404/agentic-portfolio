import { Injectable } from '@nestjs/common';
import { profileData } from './profile.data';
import type {
  ExperienceItem,
  PortfolioProfile,
  Project,
} from './profile.types';

type ChatIntent =
  | 'PORTFOLIO'
  | 'PROJECT'
  | 'EXPERIENCE'
  | 'HIRING'
  | 'CONTACT'
  | 'SMALL_TALK'
  | 'OFF_TOPIC'
  | 'INJECTION';

@Injectable()
export class ProfileService {
  getProfile(): PortfolioProfile {
    return profileData;
  }

  getChatContext(intent: ChatIntent): string {
    switch (intent) {
      case 'PROJECT':
        return [
          this.formatBasics(),
          'Projects:',
          this.formatProjects(profileData.projects),
          'Capabilities:',
          this.formatCapabilities(),
        ].join('\n\n');

      case 'EXPERIENCE':
        return this.formatExperienceOverview();

      case 'HIRING':
        return [
          this.formatBasics(),
          'Hiring:',
          this.formatHiring(),
          'Featured Projects:',
          this.formatProjects(
            profileData.projects.filter((project) => project.featured),
          ),
        ].join('\n\n');

      case 'CONTACT':
        return [
          `Email: ${profileData.basics.email}`,
          'Socials:',
          this.formatSocials(),
        ].join('\n\n');

      case 'SMALL_TALK':
        return this.formatBasics({
          includeLocation: false,
          includeAvailability: false,
        });

      case 'PORTFOLIO':
      default:
        return this.formatPortfolioOverview();
    }
  }

  private formatBasics(options?: {
    includeEmail?: boolean;
    includeLocation?: boolean;
    includeAvailability?: boolean;
  }): string {
    const { basics } = profileData;
    const {
      includeEmail = false,
      includeLocation = true,
      includeAvailability = true,
    } = options ?? {};

    return [
      `Name: ${basics.name}`,
      `Title: ${basics.title}`,
      `Summary: ${basics.summary}`,
      includeEmail ? `Email: ${basics.email}` : null,
      includeLocation && basics.location
        ? `Location: ${basics.location}`
        : null,
      includeAvailability && basics.availability
        ? `Availability: ${basics.availability}`
        : null,
    ]
      .filter(Boolean)
      .join('\n');
  }

  private formatPortfolioOverview(): string {
    const currentRole = profileData.experience[0];
    const featuredProjects = profileData.projects.filter(
      (project) => project.featured,
    );

    return [
      this.formatBasics({ includeLocation: false, includeAvailability: false }),
      currentRole
        ? [
            'Current Role:',
            `${currentRole.role} at ${currentRole.company} (${currentRole.start} - ${currentRole.end})`,
            `Focus: ${currentRole.summary}`,
          ].join('\n')
        : null,
      featuredProjects.length > 0
        ? [
            'Featured Projects:',
            this.formatProjectSnapshots(featuredProjects),
          ].join('\n')
        : null,
    ]
      .filter(Boolean)
      .join('\n\n');
  }

  private formatExperienceOverview(): string {
    const currentRole = profileData.experience[0];

    return [
      currentRole
        ? [
            'Current Role:',
            `${currentRole.role} at ${currentRole.company} (${currentRole.start} - ${currentRole.end})`,
            `Focus: ${currentRole.summary}`,
          ].join('\n')
        : null,
      'Experience:',
      this.formatExperience(profileData.experience),
      'Capabilities:',
      this.formatCapabilities(),
    ]
      .filter(Boolean)
      .join('\n\n');
  }

  private formatCapabilities(): string {
    return profileData.capabilities
      .map((group) => `${group.title}: ${group.items.join(', ')}`)
      .join('\n');
  }

  private formatSocials(): string {
    return profileData.socials
      .map((social) => `${social.label}: ${social.href}`)
      .join('\n');
  }

  private formatProjects(projects: Project[]): string {
    return projects
      .map((project) =>
        [
          `Project: ${project.name}`,
          `Tagline: ${project.tagline}`,
          `Description: ${project.description}`,
          `Stack: ${project.stack.join(', ')}`,
          `Highlights: ${project.highlights.join(' | ')}`,
          project.chatNotes?.problem
            ? `Problem: ${project.chatNotes.problem}`
            : null,
          project.chatNotes?.solution
            ? `Solution: ${project.chatNotes.solution}`
            : null,
          project.chatNotes?.architecture?.length
            ? `Architecture: ${project.chatNotes.architecture.join(' | ')}`
            : null,
          project.chatNotes?.tradeoffs?.length
            ? `Tradeoffs: ${project.chatNotes.tradeoffs.join(' | ')}`
            : null,
          project.chatNotes?.impact?.length
            ? `Impact: ${project.chatNotes.impact.join(' | ')}`
            : null,
        ]
          .filter(Boolean)
          .join('\n'),
      )
      .join('\n\n');
  }

  private formatProjectSnapshots(projects: Project[]): string {
    return projects
      .map(
        (project) =>
          `${project.name}: ${project.tagline}. ${project.description}`,
      )
      .join('\n');
  }

  private formatExperience(experience: ExperienceItem[]): string {
    return experience
      .map((item) =>
        [
          `${item.role} at ${item.company} (${item.start} - ${item.end})`,
          `Summary: ${item.summary}`,
          `Stack: ${item.stack.join(', ')}`,
          `Highlights: ${item.highlights.join(' | ')}`,
        ].join('\n'),
      )
      .join('\n\n');
  }

  private formatHiring(): string {
    return [
      `Pitch: ${profileData.hiring.elevatorPitch}`,
      `Strengths: ${profileData.hiring.strengths.join(' | ')}`,
      `Ideal Roles: ${profileData.hiring.idealRoles.join(' | ')}`,
    ].join('\n');
  }
}
