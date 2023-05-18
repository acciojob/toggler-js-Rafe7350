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