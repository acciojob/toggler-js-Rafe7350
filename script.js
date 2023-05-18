//your JS code here. If required.
const checkboxes = document.querySelectorAll('.toggle input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        let checkedCount = 0;
        checkboxes.forEach(cb => {
          if (cb.checked) checkedCount++;
        });

        if (checkedCount > 2) {
          checkboxes.forEach(cb => {
            if (!cb.checked) cb.disabled = true;
          });
        } else {
          checkboxes.forEach(cb => {
            cb.disabled = false;
          });
        }
      });
    });

describe('check for checkboxes', () => {
  it('check if text present in all the spans of checkboxes is correct', () => {
    cy.visit('your-webpage-url'); // Replace 'your-webpage-url' with the actual URL of your webpage

    cy.get('.toggle-container')
      .find('.toggle')
      .each(($toggle) => {
        const spanText = $toggle.find('span').text();
        const checkboxId = $toggle.find('input[type="checkbox"]').attr('id');

        // Verify the text in the span based on the checkbox ID
        switch (checkboxId) {
          case 'good':
            expect(spanText).to.equal('Good');
            break;
          case 'cheap':
            expect(spanText).to.equal('Cheap');
            break;
          case 'fast':
            expect(spanText).to.equal('Fast');
            break;
          default:
            throw new Error(`Unknown checkbox ID: ${checkboxId}`);
        }
      });
  });

  it('check if all three checkboxes are active at a time or not', () => {
    cy.visit('your-webpage-url'); // Replace 'your-webpage-url' with the actual URL of your webpage

    cy.get('#good').check().should('be.checked');
    cy.get('#cheap').check().should('be.checked');

    // Fast checkbox should not be checked initially
    cy.get('#fast').should('not.be.checked');

    cy.get('#fast').check().should('be.checked');

    // Only Fast checkbox should be checked, others should be unchecked
    cy.get('#good').should('not.be.checked');
    cy.get('#cheap').should('not.be.checked');
  });
});
