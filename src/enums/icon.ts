import { IconDefinition, faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faHome, faIndustry } from "@fortawesome/free-solid-svg-icons";

export class Icon {
  static readonly TWITTER  = new Icon("twitter", faTwitter)
  static readonly FACEBOOK = new Icon("facebook", faFacebook)
  static readonly INSTAGRAM = new Icon("instagram", faInstagram)
  static readonly VERIFIED = new Icon("verified", faCheck)
  static readonly IDJSITE = new Icon("idjsite", faIndustry)
  static readonly HOME = new Icon("home", faHome)
  static readonly YOUTUBE = new Icon("youtube", faYoutube)

  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly value: IconDefinition) {
  }

  toString() {
    return this.key;
  }
}