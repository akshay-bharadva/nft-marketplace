export function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export const convertToSubString = (str: string) => {
  const newString = str.substring(0, 20) + "..." + str.substring(str.length - 10, str.length);
  return str.length > 25 ? newString : str;
};

export const cutAddress = (account: string) => {
  return account?.substring(0, 5) + "...." + account?.substring(account.length - 4);
};

export const copyTextToClipboard = async (textToCopy: string) => {
  if ("clipboard" in navigator) {
    await navigator.clipboard.writeText(textToCopy);
  } else {
    return document.execCommand("copy", true, textToCopy);
  }
};

export const convertToSlug = (str: string) => {
  return str.split(" ").join("-").toLowerCase();
};
