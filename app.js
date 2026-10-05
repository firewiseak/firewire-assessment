const app = document.getElementById("app");

const sections = [
  {
    id: "access",
    name: "Site Access",
    title: "Can emergency vehicles reach your home?",
    intro:
      "Take a look at the roads, trails, driveway, turnaround space, and property identification around your home.",
    questions: [
      {
        id: "accessRoutes",
        text: "How many roads or trails provide access in and out of your property?",
        options: ["Two or more", "One"]
      },
      {
        id: "accessSeason",
        text: "When is your primary access route generally usable?",
        options: ["Year-round", "Summer only", "Winter only"]
      },
      {
        id: "drivewaySize",
        text: "If you have a driveway, is it at least 14 ft wide with 13.5 ft of vertical clearance?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "drivewayVegetation",
        text: "If you have a driveway, is vegetation cleared back to provide approximately 20 ft of total width?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "turnaround",
        text: "Is there enough space for an emergency vehicle to turn around?",
        options: ["Yes", "No"]
      },
      {
        id: "bridge",
        text: "If your access crosses a bridge, is the bridge marked with its weight limitation?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "trailhead",
        text: "If a trailhead provides access to your property, is it at least 5 ft wide and 6 ft high?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "trailVegetation",
        text: "If a trailhead provides access, is vegetation cleared along it?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "addressVisible",
        text: "Is your property clearly identified from the roads or trails used to reach it?",
        helper:
          "Fire-resistant, reflective address numbers at least 4 inches tall can help responders identify your property.",
        options: ["Yes", "No"]
      }
    ]
  },

  {
    id: "structure",
    name: "Home & Structure",
    title: "Take a look at your home's exterior",
    intro:
      "Check the roof, walls, windows, vents, decks, and other features that can affect how your home responds to wildfire.",
    questions: [
      {
        id: "roofMaterial",
        text: "What type of roofing material does your home have?",
        options: [
          "Metal",
          "Asphalt / composition shingles",
          "Tile or other noncombustible roofing",
          "Wood shakes / shingles",
          "Other"
        ]
      },
      {
        id: "roofDebris",
        text: "Are the roof and gutters clear of leaves, needles, and other combustible debris?",
        options: ["Yes", "No"]
      },
      {
        id: "eaves",
        text: "If your home has eaves, are they enclosed or constructed to reduce places where embers can collect?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "eaveVegetation",
        text: "Is vegetation kept away from directly beneath the eaves?",
        options: ["Yes", "No"]
      },
      {
        id: "siding",
        text: "What is the primary exterior wall or siding material?",
        options: [
          "Metal, fiber cement, stucco, masonry, or similar",
          "Wood siding",
          "Vinyl siding",
          "Other"
        ]
      },
      {
        id: "openings",
        text: "Are visible gaps and openings in the exterior sealed or protected from ember entry?",
        options: ["Yes", "No"]
      },
      {
        id: "vents",
        text: "If your home has exterior vents, are they protected with approximately 1/8-inch metal mesh or another ember-resistant design?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "windowCombustibles",
        text: "Are combustible materials and dense vegetation kept away from windows?",
        options: ["Yes", "No"]
      },
      {
        id: "baseMaterial",
        text: "Is there noncombustible material immediately next to the base of the home?",
        options: ["Yes", "No"]
      },
      {
        id: "attachments",
        text: "If you have decks, porches, stairs, or ramps, are they built and maintained to reduce combustible exposure?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "underDeck",
        text: "If you have elevated decks or similar attachments, is the area underneath free of combustible storage and debris?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "fence",
        text: "If fencing attaches to the home, is the section nearest the structure made of noncombustible material?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "chimneyCap",
        text: "If you have a chimney or stove pipe, does it have an appropriate cap or spark arrestor?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "chimneyClean",
        text: "If you use a chimney or stove pipe, is it regularly cleaned and maintained?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "construction",
        text: "Is the exterior free of unfinished construction or exposed areas that could collect embers?",
        options: ["Yes", "No"]
      }
    ]
  },

  {
    id: "space",
    name: "Defensible Space",
    title: "Make your home more defensible",
    intro:
      "Check how vegetation, combustible materials, and other fuels are managed around your home.",
    zones: true,
    questions: [
      {
        id: "zone0Noncombustible",
        text: "Within 0–5 ft of the home and attached structures, is the area primarily noncombustible?",
        options: ["Yes", "No"]
      },
      {
        id: "zone0Debris",
        text: "Within 0–5 ft, is the area free of combustible mulch, accumulated debris, and stored combustible material?",
        options: ["Yes", "No"]
      },
      {
        id: "zone0Vegetation",
        text: "Within 0–5 ft, have plants and other vegetation been removed or minimized?",
        options: ["Yes", "No"]
      },
      {
        id: "deckClear",
        text: "Are areas beneath decks and other attachments clear of vegetation and combustible debris?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "grass30",
        text: "Within 5–30 ft, is grass kept short and maintained?",
        options: ["Yes", "No"]
      },
      {
        id: "shrubs30",
        text: "Within 5–30 ft, are shrubs and other vegetation spaced to reduce continuous fuels?",
        options: ["Yes", "No"]
      },
      {
        id: "pruning30",
        text: "Within 5–30 ft, are lower tree branches pruned to reduce ladder fuels?",
        helper:
          "Where appropriate, prune lower branches to about 6 ft while avoiding removal of more than roughly one-third of the tree's live crown.",
        options: ["Yes", "No"]
      },
      {
        id: "deadFuel30",
        text: "Within 5–30 ft, have dead trees, limbs, brush, and other ladder fuels been removed?",
        options: ["Yes", "No"]
      },
      {
        id: "firewood30",
        text: "Is firewood and other substantial combustible storage kept at least 30 ft from the home when possible?",
        options: ["Yes", "No"]
      },
      {
        id: "limbsStructure",
        text: "Are tree limbs kept away from structures, chimneys, and overhead utility lines?",
        options: ["Yes", "No"]
      },
      {
        id: "treeSpacing30",
        text: "Within 5–30 ft, are trees and tree groups spaced to reduce continuous canopy fuels?",
        options: ["Yes", "No"]
      },
      {
        id: "extendedFuels",
        text: "Within 30–100+ ft, are dead vegetation, ladder fuels, and heavy accumulations of combustible material reduced?",
        options: ["Yes", "No"]
      },
      {
        id: "extendedSpacing",
        text: "Within 30–100+ ft, are trees and shrubs managed to interrupt continuous fuels?",
        options: ["Yes", "No"]
      }
    ]
  },

  {
    id: "utilities",
    name: "Property & Utilities",
    title: "Manage fuels and equipment around the property",
    intro:
      "Look at fuel tanks, equipment, utilities, stored materials, and other potential ignition or fuel sources.",
    questions: [
      {
        id: "equipment",
        text: "Is vegetation cleared around equipment that can produce heat or sparks?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "fuelTank",
        text: "If you have an above-ground fuel tank, is vegetation cleared for at least 10 ft around it?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "fuelShutoff",
        text: "If your property uses gas or stored fuel, is the shutoff accessible?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "propertyDebris",
        text: "Is the property free of unnecessary accumulations of combustible debris and stored materials?",
        options: ["Yes", "No"]
      },
      {
        id: "utilitiesVegetation",
        text: "Is vegetation managed around overhead utility lines and utility equipment where you can safely do so?",
        options: ["Yes", "No", "Not applicable"]
      },
      {
        id: "burning",
        text: "If you burn debris or use outdoor fire, do you follow current burn restrictions and safe-burning practices?",
        options: ["Yes", "No", "Not applicable"]
      }
    ]
  },

  {
    id: "preparedness",
    name: "Wildfire Preparedness",
    title: "Plan how your household will act during wildfire",
    intro:
      "Think through evacuation, emergency supplies, alerts, communication, and how your household will reconnect if plans change.",
    questions: [
      {
        id: "wildfirePlan",
        text: "Does your household have a wildfire evacuation plan?",
        options: ["Yes", "No"]
      },
      {
        id: "evacuationRoutes",
        text: "Has your household identified primary and alternate evacuation routes, where available?",
        options: ["Yes", "No"]
      },
      {
        id: "meetingPlace",
        text: "Has your household identified a meeting place or safety location?",
        options: ["Yes", "No"]
      },
      {
        id: "emergencySupplies",
        text: "Do you have emergency supplies ready for your household, including pets or animals if applicable?",
        helper:
          "Consider food, water, medications, important documents, and supplies needed for pets or other animals.",
        options: ["Yes", "No"]
      },
      {
        id: "alerts",
        text: "Do you know where to get local wildfire and emergency information and alerts?",
        options: ["Yes", "No"]
      },
      {
        id: "communications",
        text: "Which communication methods are generally available at your property?",
        type: "checkbox",
        options: [
          "Cell service",
          "Landline",
          "Internet / Starlink",
          "CB radio",
          "Satellite phone or device",
          "Other",
          "None / unreliable"
        ]
      },
      {
        id: "householdContact",
        text: "Does your household have a plan for contacting one another if normal communications are disrupted?",
        options: ["Yes", "No"]
      },
      {
        id: "trustedContact",
        text: "Is there a trusted neighbor or contact who could check on or reach your household during an evacuation or outage?",
        options: ["Yes", "No"]
      }
    ]
  },

  {
    id: "conditions",
    name: "Property Conditions",
    title: "Understand your property conditions",
    intro:
      "Look at terrain, surrounding vegetation, access, water availability, and other conditions that can influence wildfire and emergency response.",
    questions: [
      {
        id: "slope",
        text: "How would you describe the slope around your home?",
        options: ["Mostly flat", "Moderate slope", "Steep slope"]
      },
      {
        id: "slopePosition",
        text: "Where is the home located in relation to the surrounding slope?",
        options: [
          "Mostly level terrain",
          "Lower portion of slope",
          "Mid-slope",
          "Upper portion / ridge"
        ]
      },
      {
        id: "aspect",
        text: "Which direction does the primary slope near the home face?",
        options: ["North", "East", "South", "West", "Mostly flat / mixed"]
      },
      {
        id: "vegetationType",
        text: "What best describes the vegetation surrounding the property?",
        options: [
          "Mostly open / maintained",
          "Mixed forest and open areas",
          "Dense forest or brush",
          "Other"
        ]
      },
      {
        id: "responseDistance",
        text: "Is a fire station or emergency response facility located within approximately 5 miles?",
        options: ["Yes", "No"]
      },
      {
        id: "waterSource",
        text: "Is there an accessible year-round water source on or near the property?",
        options: ["Yes", "No"]
      },
      {
        id: "helispot",
        text: "Is there a cleared, level area approximately 30 ft × 30 ft on the property or nearby that could potentially serve as a helicopter landing area?",
        options: ["Yes", "No"]
      }
    ]
  }
];

const answers = JSON.parse(
  localStorage.getItem("firewiseAnswers") || "{}"
);

let screen = "welcome";
let currentSection = 0;

function saveAnswers() {
  localStorage.setItem(
    "firewiseAnswers",
    JSON.stringify(answers)
  );
}

function topBar(sectionNumber = null) {
  return `
    <div class="topbar">
      <p class="brand">Alaska Firewise</p>
      ${
        sectionNumber
          ? `<p class="section-count">Section ${sectionNumber} of 6</p>`
          : ""
      }
    </div>
  `;
}

function progress(percent) {
  return `
    <div class="progress-track">
      <div class="progress-fill" style="width:${percent}%"></div>
    </div>
  `;
}

function renderWelcome() {
  app.innerHTML = `
    <main class="app-shell welcome">
      <div class="welcome-layout">

        <div>
          ${topBar()}

          <p class="eyebrow">Alaska Division of Forestry & Fire Protection</p>

          <h1 class="screen-title">
            Wildfire Home & Property Self-Assessment
          </h1>

          <p class="lead">
            Walk around your property and answer a few questions about wildfire preparedness.
          </p>

          <div class="info-box">
            <p>
              Find practical improvements that can make your home and property more defensible.
            </p>
          </div>

          <div class="navigation">
            <button class="primary-button full-width" onclick="goOverview()">
              Start Assessment
            </button>
          </div>

          <p class="prototype-note">
            Prototype for review. This self-assessment is not a professional wildfire-risk determination.
          </p>
        </div>

        <div class="hero-placeholder">
          Final Alaska Firewise home image
        </div>

      </div>
    </main>
  `;
}

function renderOverview() {
  app.innerHTML = `
    <main class="app-shell">

      ${topBar()}
      ${progress(0)}

      <p class="eyebrow">Before you begin</p>

      <h1 class="section-title">
        Take a walk around your property
      </h1>

      <p class="lead">
        The assessment is organized into six sections to guide you around your home and property.
      </p>

      <ol class="section-list">
        ${sections
          .map(
            (section, index) => `
              <li>
                <span class="section-list-number">${index + 1}</span>
                <strong>${section.name}</strong>
              </li>
            `
          )
          .join("")}
      </ol>

      <div class="notice">
        <p>
          Answer based on what you can observe today. When a question asks you to check or measure something, go take a look.
        </p>
      </div>

      <div class="navigation">
        <button class="secondary-button" onclick="goWelcome()">
          Back
        </button>

        <button class="primary-button" onclick="openSection(0)">
          Begin
        </button>
      </div>

    </main>
  `;
}

function renderZones() {
  return `
    <div class="zone-card">
      <h3>Home Ignition Zones</h3>

      <div class="zone-row">
        <div class="zone-distance">0–5 ft</div>
        <p>
          <strong>Immediate Zone.</strong>
          Keep the area directly next to the home as noncombustible as practical.
        </p>
      </div>

      <div class="zone-row">
        <div class="zone-distance">5–30 ft</div>
        <p>
          <strong>Intermediate Zone.</strong>
          Manage vegetation and spacing to interrupt fuels.
        </p>
      </div>

      <div class="zone-row">
        <div class="zone-distance">30–100+ ft</div>
        <p>
          <strong>Extended Zone.</strong>
          Reduce heavy fuels, ladder fuels, and continuous vegetation.
        </p>
      </div>

      <p class="helper">
        On slopes greater than about 25%, the Extended Zone may need to reach farther from the home.
      </p>
    </div>
  `;
}

function questionHTML(question) {
  const saved = answers[question.id];

  const options = question.options
    .map(option => {
      if (question.type === "checkbox") {
        const checked =
          Array.isArray(saved) && saved.includes(option)
            ? "checked"
            : "";

        return `
          <label class="answer-option checkbox-option">
            <input
              type="checkbox"
              name="${question.id}"
              value="${option}"
              ${checked}
              onchange="handleCheckbox('${question.id}', this)"
            >
            <span>${option}</span>
          </label>
        `;
      }

      const checked =
        saved === option ? "checked" : "";

      return `
        <label class="answer-option">
          <input
            type="radio"
            name="${question.id}"
            value="${option}"
            ${checked}
            onchange="handleRadio('${question.id}', '${escapeJS(option)}')"
          >
          <span>${option}</span>
        </label>
      `;
    })
    .join("");

  return `
    <div class="question-card" id="card-${question.id}">
      <p class="question-label">${question.text}</p>

      ${
        question.helper
          ? `<p class="helper">${question.helper}</p>`
          : ""
      }

      <div class="answer-grid">
        ${options}
      </div>
    </div>
  `;
}

function renderSection() {
  const section = sections[currentSection];
  const percent =
    ((currentSection + 1) / sections.length) * 100;

  app.innerHTML = `
    <main class="app-shell">

      ${topBar(currentSection + 1)}
      ${progress(percent)}

      <div class="desktop-section-layout">

        <div class="desktop-section-intro">

          <p class="eyebrow">${section.name}</p>

          <h1 class="section-title">
            ${section.title}
          </h1>

          <p class="lead">
            ${section.intro}
          </p>

          ${section.zones ? renderZones() : ""}

        </div>

        <div>

          <div class="questions">
            ${section.questions
              .map(questionHTML)
              .join("")}
          </div>

          <div class="navigation">

            <button
              class="secondary-button"
              onclick="previousSection()"
            >
              Back
            </button>

            <button
              class="primary-button"
              onclick="nextSection()"
            >
              ${
                currentSection === sections.length - 1
                  ? "Review Answers"
                  : "Save & Continue"
              }
            </button>

          </div>

        </div>

      </div>

    </main>
  `;

  window.scrollTo(0, 0);
}

function renderReview() {
  app.innerHTML = `
    <main class="app-shell">

      ${topBar()}
      ${progress(100)}

      <p class="eyebrow">Review</p>

      <h1 class="section-title">
        Review your answers
      </h1>

      <p class="lead">
        Take a final look before creating your action plan. You can return to any section to make changes.
      </p>

      ${sections
        .map(
          (section, sectionIndex) => `
            <section class="review-section">

              <h2 class="review-heading">
                ${section.name}
              </h2>

              ${section.questions
                .map(question => {
                  const value = answers[question.id];

                  const display =
                    Array.isArray(value)
                      ? value.join(", ")
                      : value || "Not answered";

                  return `
                    <div class="review-item">

                      <div>
                        <p class="review-question">
                          ${question.text}
                        </p>

                        <p class="review-answer">
                          ${display}
                        </p>
                      </div>

                      <button
                        class="edit-button"
                        onclick="editSection(${sectionIndex}, '${question.id}')"
                      >
                        Edit
                      </button>

                    </div>
                  `;
                })
                .join("")}

            </section>
          `
        )
        .join("")}

      <div class="navigation">

        <button
          class="secondary-button"
          onclick="openSection(5)"
        >
          Back
        </button>

        <button
          class="primary-button"
          onclick="showResults()"
        >
          Create My Action Plan
        </button>

      </div>

    </main>
  `;

  window.scrollTo(0, 0);
}

function resultCard(type, title, text) {
  return `
    <div class="result-card ${type}">
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  `;
}

function buildResults() {
  const results = {
    priority: [],
    improvement: [],
    good: [],
    context: []
  };

  if (answers.drivewaySize === "No") {
    results.priority.push(
      resultCard(
        "priority",
        "Emergency vehicle access",
        "Where practical, improve driveway clearance toward at least 14 ft wide and 13.5 ft high."
      )
    );
  }

  if (answers.turnaround === "No") {
    results.priority.push(
      resultCard(
        "priority",
        "Emergency vehicle turnaround",
        "Consider improving turnaround space so emergency vehicles can enter and leave more effectively."
      )
    );
  }

  if (answers.addressVisible === "No") {
    results.improvement.push(
      resultCard(
        "improvement",
        "Property identification",
        "Improve property identification so responders can locate the home from the roads or trails used to reach it."
      )
    );
  }

  if (answers.roofDebris === "No") {
    results.priority.push(
      resultCard(
        "priority",
        "Roof and gutter debris",
        "Remove leaves, needles, and other combustible debris from the roof and gutters."
      )
    );
  }

  if (answers.vents === "No") {
    results.improvement.push(
      resultCard(
        "improvement",
        "Protect exterior vents",
        "Consider appropriate metal mesh or another ember-resistant vent design."
      )
    );
  }

  if (answers.baseMaterial === "No") {
    results.priority.push(
      resultCard(
        "priority",
        "Immediate area around the home",
        "Reduce combustible material directly next to the structure and consider a noncombustible surface."
      )
    );
  }

  if (answers.zone0Noncombustible === "No") {
    results.priority.push(
      resultCard(
        "priority",
        "0–5 ft Immediate Zone",
        "Focus first on reducing combustible material and vegetation immediately next to the home."
      )
    );
  }

  if (answers.firewood30 === "No") {
    results.improvement.push(
      resultCard(
        "improvement",
        "Firewood storage",
        "Move firewood and substantial combustible storage farther from the home when practical."
      )
    );
  }

  if (answers.deadFuel30 === "No") {
    results.improvement.push(
      resultCard(
        "improvement",
        "Dead vegetation and ladder fuels",
        "Remove dead limbs, brush, and other fuels that can carry fire toward trees or structures."
      )
    );
  }

  if (answers.fuelTank === "No") {
    results.improvement.push(
      resultCard(
        "improvement",
        "Fuel tank clearance",
        "Maintain vegetation clearance around above-ground fuel tanks."
      )
    );
  }

  if (answers.wildfirePlan === "No") {
    results.priority.push(
      resultCard(
        "priority",
        "Household wildfire plan",
        "Create a household plan for what you will do and where you will go during a wildfire evacuation."
      )
    );
  }

  if (answers.evacuationRoutes === "No") {
    results.priority.push(
      resultCard(
        "priority",
        "Evacuation routes",
        "Identify your primary evacuation route and alternate routes where they are available."
      )
    );
  }

  if (answers.emergencySupplies === "No") {
    results.improvement.push(
      resultCard(
        "improvement",
        "Emergency supplies",
        "Prepare essential supplies for your household, including medications, documents, and animal needs where applicable."
      )
    );
  }

  if (answers.alerts === "No") {
    results.improvement.push(
      resultCard(
        "improvement",
        "Emergency information",
        "Identify reliable sources for local wildfire information and emergency alerts."
      )
    );
  }

  if (
    answers.slope === "Steep slope" ||
    answers.slopePosition === "Upper portion / ridge"
  ) {
    results.context.push(
      resultCard(
        "context",
        "Terrain",
        "Slope and the home's position on the terrain can influence wildfire behavior and may benefit from a closer look on site."
      )
    );
  }

  if (answers.vegetationType === "Dense forest or brush") {
    results.context.push(
      resultCard(
        "context",
        "Surrounding vegetation",
        "Dense surrounding vegetation can affect wildfire exposure and may benefit from site-specific recommendations."
      )
    );
  }

  if (answers.accessRoutes === "One") {
    results.context.push(
      resultCard(
        "context",
        "Single access route",
        "Your property has one road or trail providing access in and out. Keep this in mind when planning evacuation."
      )
    );
  }

  const goodCandidates = [
    ["roofDebris", "Roof and gutters", "Your roof and gutters are reported clear of combustible debris."],
    ["addressVisible", "Property identification", "Your property is reported clearly identified for responders."],
    ["wildfirePlan", "Wildfire plan", "Your household reports having a wildfire evacuation plan."],
    ["zone0Noncombustible", "Immediate Zone", "You report maintaining a primarily noncombustible area immediately next to the home."]
  ];

  goodCandidates.forEach(([id, title, text]) => {
    if (answers[id] === "Yes") {
      results.good.push(
        resultCard("good", title, text)
      );
    }
  });

  return results;
}

function renderResults() {
  const results = buildResults();

  const group = (title, description, cards) => {
    if (!cards.length) return "";

    return `
      <section class="result-group">
        <h2 class="result-group-title">${title}</h2>
        <p class="helper">${description}</p>
        ${cards.join("")}
      </section>
    `;
  };

  app.innerHTML = `
    <main class="app-shell">

      ${topBar()}

      <p class="eyebrow">Your results</p>

      <h1 class="section-title">
        Your action plan
      </h1>

      <p class="lead">
        Based on your answers, here are the areas to focus on around your home and property.
      </p>

      ${group(
        "Priority actions",
        "Important improvements to address first.",
        results.priority
      )}

      ${group(
        "Other improvements",
        "Additional practical steps that can improve defensibility and preparedness.",
        results.improvement
      )}

      ${group(
        "Good practices",
        "Things you're already doing that align with Firewise recommendations.",
        results.good
      )}

      ${group(
        "Conditions worth a closer look",
        "Property conditions that may benefit from professional interpretation.",
        results.context
      )}

      <div class="notice">
        <p>
          <strong>Want a more complete picture?</strong><br>
          Every property is different. Alaska Division of Forestry & Fire Protection staff can evaluate site-specific conditions and help identify priorities.
        </p>
      </div>

      <div class="navigation">

        <button
          class="secondary-button"
          onclick="showReview()"
        >
          Review Answers
        </button>

        <button
          class="primary-button"
          onclick="showRequest()"
        >
          Request Site Assessment
        </button>

      </div>

      <p class="prototype-note">
        This self-assessment provides general guidance based on homeowner observations and is not a professional wildfire-risk determination.
      </p>

    </main>
  `;

  window.scrollTo(0, 0);
}

function renderRequest() {
  app.innerHTML = `
    <main class="app-shell">

      ${topBar()}

      <p class="eyebrow">Professional assistance</p>

      <h1 class="section-title">
        Request a site assessment
      </h1>

      <p class="lead">
        A trained Alaska Division of Forestry & Fire Protection professional can look at your property in person and help identify practical priorities.
      </p>

      <div class="form-card">

        <div class="form-field">
          <label for="requestName">Name</label>
          <input id="requestName" type="text">
        </div>

        <div class="form-field">
          <label for="requestEmail">Email</label>
          <input id="requestEmail" type="email">
        </div>

        <div class="form-field">
          <label for="requestPhone">Phone</label>
          <input id="requestPhone" type="tel">
        </div>

        <div class="form-field">
          <label for="requestLocation">
            Property location or community
          </label>
          <input id="requestLocation" type="text">
        </div>

        <div class="form-field">
          <label for="requestNotes">
            Anything you'd like us to know?
          </label>
          <textarea id="requestNotes"></textarea>
        </div>

        <label class="consent">
          <input id="requestConsent" type="checkbox">
          <span>
            I agree to submit this information to Alaska DNR to request a site assessment.
          </span>
        </label>

      </div>

      <div class="notice">
        <p>
          <strong>Prototype only:</strong> this form does not send information anywhere.
        </p>
      </div>

      <div class="navigation">

        <button
          class="secondary-button"
          onclick="showResults()"
        >
          Back
        </button>

        <button
          class="primary-button"
          onclick="prototypeSubmit()"
        >
          Submit Request
        </button>

      </div>

    </main>
  `;

  window.scrollTo(0, 0);
}

/* ---------- ANSWER HANDLING ---------- */

function handleRadio(questionId, value) {
  answers[questionId] = value;
  saveAnswers();
}

function handleCheckbox(questionId, input) {
  if (!Array.isArray(answers[questionId])) {
    answers[questionId] = [];
  }

  if (input.checked) {
    if (!answers[questionId].includes(input.value)) {
      answers[questionId].push(input.value);
    }
  } else {
    answers[questionId] =
      answers[questionId].filter(
        value => value !== input.value
      );
  }

  saveAnswers();
}

/* ---------- NAVIGATION ---------- */

function goWelcome() {
  screen = "welcome";
  renderWelcome();
}

function goOverview() {
  screen = "overview";
  renderOverview();
}

function openSection(index) {
  currentSection = index;
  screen = "section";
  renderSection();
}

function previousSection() {
  if (currentSection === 0) {
    goOverview();
    return;
  }

  currentSection -= 1;
  renderSection();
}

function nextSection() {
  if (currentSection < sections.length - 1) {
    currentSection += 1;
    renderSection();
    return;
  }

  showReview();
}

function showReview() {
  screen = "review";
  renderReview();
}

function showResults() {
  screen = "results";
  renderResults();
}

function showRequest() {
  screen = "request";
  renderRequest();
}

function editSection(sectionIndex, questionId) {
  currentSection = sectionIndex;
  renderSection();

  setTimeout(() => {
    const card =
      document.getElementById(`card-${questionId}`);

    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, 50);
}

function prototypeSubmit() {
  const consent =
    document.getElementById("requestConsent");

  if (!consent.checked) {
    alert(
      "Please check the consent box first. This is still only a prototype and nothing will be submitted."
    );
    return;
  }

  alert(
    "Prototype complete — no information was sent anywhere."
  );
}

/* ---------- HELPERS ---------- */

function escapeJS(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");
}

/* ---------- START ---------- */

renderWelcome();