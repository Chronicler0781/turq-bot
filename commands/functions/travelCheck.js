module.exports = function travelCheck(user, location) {

    let canSurf = false;
    let canDive = false;
    let hasBadges = false;
    let hasRevJobs = false;
    let canTravel = false;
    let errorReason = `>>> `;

    //surf check
    if (location.usableHMs.indexOf('surf') === -1 || user.services.indexOf('Drakella Journeys') !== -1) {
        canSurf = true;
    }
    else {
        errorReason = errorReason + `Error: This route requires a surfing service. Please visit Rune City after obtaining 3 badges, and complete the 'Drakella Journeys' sidequest.\n`;
    }

    //dive check
    if (location.usableHMs.indexOf('dive') === -1 || user.services.indexOf('Diving Gear') !== -1) {
        canDive = true;
    }
    else if (location.usableHMs.indexOf('surf') !== -1) {
            canDive = true;
    }
    else {
        errorReason = errorReason + `Error: This route requires diving gear. Please visit Xybryle Bay after obtaining 3 badges, and complete the 'Submarine Safari' minigame by catching a Pokémon with at least one egg move.\n`;
    }
    
    //badge check
    if (user.badges.length >= location.numRequiredBadges || typeof location.numRequiredBadges == 'undefined') {
        hasBadges = true;
    }
    else {
        errorReason = errorReason + `Error: ${location.name} requires ${location.numRequiredBadges} badges in order to access it.\n`;
    }

    //revivalist job check
    if (user.revivalistJobsCompleted.length >= location.numRequiredRevJobs || typeof location.numRequiredRevJobs == 'undefined') {
        hasRevJobs = true;
    }
    else {
        errorReason = errorReason + `Error: ${location.name} requires the completion of ${location.numRequiredRevJobs} revivalist jobs in order to access it.\n`;
    }

    if (canSurf && canDive && hasBadges && hasRevJobs) {
        canTravel = true;
    }

    return { canTravelTo: canTravel, reason: errorReason }
}