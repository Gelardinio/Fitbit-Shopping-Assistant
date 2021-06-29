function mySettings(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">User Settings</Text>}>
          <Select
            label={`Gender`}
            settingsKey="gender"
            options={[
                {name:"Male"},
                {name:"Female"},
            ]}
          />
          <Slider
            settingsKey="chest"
            label={"Chest Measurement (IN): " + props.settingsStorage.getItem('chestM')}
            min="0"
            max="60"
            onChange={value => props.settingsStorage.setItem('chestM', value)}
          />
          <Slider
            settingsKey="waist"
            label={"Waist Measurement (IN): " + props.settingsStorage.getItem('waistM')}
            min="0"
            max="60"
            onChange={value => props.settingsStorage.setItem('waistM', value)}
          />
          <Slider
            settingsKey="hip"
            label={"Hip Measurement (IN): " + props.settingsStorage.getItem('hipM')}
            min="0"
            max="60"
            onChange={value => props.settingsStorage.setItem('hipM', value)}
          />
          <Slider
            settingsKey="inseam"
            label={"Inseam Measurement (IN): " + props.settingsStorage.getItem('inseamM')}
            min="0"
            max="60"
            onChange={value => props.settingsStorage.setItem('inseamM', value)}
          />
          <Text>Main Background Colour</Text>
          <ColorSelect
            settingsKey="color"
            colors={[
              {color: "#000000"},
              {color: "tomato"},
              {color: "sandybrown"},
              {color: "#FFD700"},
              {color: "#ADFF2F"},
              {color: "deepskyblue"},
              {color: "plum"}
            ]}
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(mySettings);
  