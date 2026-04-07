'use strict';

/**
 * Formats case charges for Discord-compatible markdown copying.
 *
 * @param {Array} cases - An array of case objects containing offence titles, acts, sections, and arrest powers.
 * @returns {string} - A formatted string of case charge details.
 */
function formatCaseCharges(cases) {
    return cases.map(c => {
        const offences = c.offences.map(offence => `- **Offence:** ${offence.title}, **Act:** ${offence.act}, **Section:** ${offence.section}, **Arrest Power:** ${offence.arrestPower}`).join('\n');
        return `**Case ID:** ${c.caseId}\n${offences}`;
    }).join('\n\n');
}

module.exports = formatCaseCharges;