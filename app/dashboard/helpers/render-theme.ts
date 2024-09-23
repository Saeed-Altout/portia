export const renderTheme = (plan: "Basic" | "Standard" | "Premium") => {
  if (plan === "Basic") {
    return {
      fill: "primary",
      theme: "primary",
    };
  } else if (plan === "Standard") {
    return {
      fill: "danger",
      theme: "danger",
    };
  } else if (plan === "Premium") {
    return {
      fill: "muted",
      theme: "muted",
    };
  } else {
    return {
      fill: "primary",
      theme: "primary",
    };
  }
};
