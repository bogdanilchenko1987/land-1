export const handleScrollToContacts = () => {
  const contactsSection = document.getElementById("contacts");
  if (contactsSection) {
    contactsSection.scrollIntoView({ behavior: "smooth" });
  }
};
