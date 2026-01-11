<script>
  import emailIcon from "../../lib/assets/email.svg";
  import locationIcon from "../../lib/assets/location.svg";
  import profilePicture from "../../lib/assets/profile.png";
  import Info from "./+Info.svelte";
  import MyName from "./+MyName.svelte";
  import Overview from "./+Overview.svelte";
  import SocialNetworks from "./+SocialNetworks.svelte";
</script>

<div
  class="bg-white p-8 md:px-20 md:py-16 bg-no-repeat bg-cover bg-app-wallpaper flex flex-col justify-center"
>
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <div class="flex flex-col md:flex-row md:items-center gap-8">
        <img
          src={profilePicture}
          alt="profile"
          class="w-40 rounded-full self-center"
        />
        <MyName />
      </div>
      <Overview />
    </div>
    <div class="flex flex-col md:flex-row md:gap-12 gap-8 pb-5">
      <Info icon={locationIcon} text="Natal - RN, Brazil" alt="Location" />
      <Info
        icon={emailIcon}
        text="Email me"
        alt="Email"
        link="mailto:j.quaresmasantos98@gmail.com"
      />
    </div>
    <SocialNetworks />
  </section>
</div>
